#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

function generateConstantName(apiPath: string): string {
  let name = apiPath.replace(/^\//, '');
  name = name.replace(
    /\{([\w_]+)\}/g,
    (_m, param) => `BY_${param.toUpperCase()}`,
  );
  name = name.replace(/[/-]/g, '_');
  name = name.replace(/__+/g, '_');
  name = name.replace(/_+$/, '');
  name = name.toUpperCase();
  return `API_PATH_${name}`;
}

function generatePathsFile(paths: Record<string, unknown>): string {
  const lines = [
    '/**',
    ' * API path constants for OpusDNS API.',
    ' *',
    ' * This file is auto-generated from the OpenAPI specification.',
    ' * Do not edit manually.',
    ' */',
    '',
  ];

  Object.keys(paths)
    .sort()
    .forEach((apiPath) => {
      const constName = generateConstantName(apiPath);
      lines.push(`export const ${constName} = '${apiPath}';`);
    });

  lines.push('');
  return lines.join('\n');
}

function main() {
  try {
    const openapiContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const openapi = yaml.load(openapiContent) as any;

    const paths = openapi.paths;
    if (!paths) {
      throw new Error('No paths found in OpenAPI specification');
    }

    // Generate paths file
    const pathsContent = generatePathsFile(paths);
    const pathsOutputPath = path.join(
      process.cwd(),
      'src/helpers/paths.ts',
    );
    fs.writeFileSync(pathsOutputPath, pathsContent);

    console.log(
      `✅ Generated ${Object.keys(paths).length} API path constants in ${pathsOutputPath}`,
    );

    return Object.keys(paths).length;
  } catch (error) {
    console.error('❌ Error generating API paths:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateConstantName, main as generatePaths };
