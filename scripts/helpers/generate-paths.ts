#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface PathConstant {
  name: string;
  value: string;
}

function normalizePathName(rawPath: string): string {
  const sanitized = rawPath
    .replace(/^\/+/, '')
    .replace(/\{([^}]+)\}/g, '$1')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toUpperCase();

  return `API_${sanitized || 'ROOT'}`;
}

function extractPathConstants(spec: unknown): PathConstant[] {
  if (!spec || typeof spec !== 'object') {
    throw new Error('OpenAPI specification must be an object');
  }

  const openApi = spec as { paths?: Record<string, unknown> };

  if (!openApi.paths || typeof openApi.paths !== 'object') {
    console.warn('⚠️  No paths section found in OpenAPI specification');
    return [];
  }

  const constants: PathConstant[] = [];
  const seenNames = new Set<string>();

  Object.keys(openApi.paths)
    .sort()
    .forEach((pathKey) => {
      const constantName = normalizePathName(pathKey);

      if (seenNames.has(constantName)) {
        throw new Error(
          `Duplicate constant name generated: ${constantName} (from path "${pathKey}")`,
        );
      }

      seenNames.add(constantName);
      constants.push({ name: constantName, value: pathKey });
    });

  return constants;
}

function buildFileContent(constants: PathConstant[]): string {
  const header = `/**
 * Auto-generated API path constants
 *
 * This file is generated from the OpenAPI specification. Each constant maps to a
 * path string defined in the spec, enabling reuse across the codebase.
 *
 * @remarks
 * - Constants follow the pattern API_<PATH>
 * - Path parameters are normalized to uppercase snake case (e.g. {domain_id} -> DOMAIN_ID)
 * - The root path '/' is represented by API_ROOT
 *
 * Do not edit manually.
 */

`;

  const constantLines = constants.map(
    ({ name, value }) => `export const ${name} = '${value}' as const;`,
  );

  const arrayLines = [
    'export const API_PATHS = [',
    ...constants.map(({ name }) => `  ${name},`),
    '] as const;',
    '',
    'export type ApiPath = (typeof API_PATHS)[number];',
  ];

  return [header, ...constantLines, '', ...arrayLines, ''].join('\n');
}

function main() {
  try {
    const schemaPath = path.resolve(OPEN_API_SCHEMA_PATH);
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    const schema = yaml.load(schemaContent);

    const constants = extractPathConstants(schema);

    console.log(`Found ${constants.length} API paths`);

    const output = buildFileContent(constants);
    const outputPath = path.resolve('src/helpers/paths.ts');
    fs.writeFileSync(outputPath, `${output}\n`, 'utf8');

    console.log(`✅ Path constants written to ${outputPath}`);

    return constants.length;
  } catch (error) {
    console.error('❌ Error generating path constants:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { buildFileContent, extractPathConstants, main as generatePaths, normalizePathName };

