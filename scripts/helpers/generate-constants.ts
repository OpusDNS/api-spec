#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface EnumDefinition {
  name: string;
  values: string[];
  type: 'string' | 'integer';
}

interface OpenAPISchema {
  components?: {
    schemas?: Record<
      string,
      {
        enum?: unknown[];
        type?: string;
      }
    >;
  };
}

function convertToUpperCase(name: string): string {
  return name
    .replace(/([A-Z]+)(?=[A-Z][a-z]|$)/g, '$1_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toUpperCase()
    .replace(/__+/g, '_')
    .replace(/_+$/, '');
}

function extractEnumsFromOpenAPI(): EnumDefinition[] {
  const content = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');
  const openAPI = yaml.load(content) as OpenAPISchema;
  const enums: EnumDefinition[] = [];

  if (!openAPI.components?.schemas) {
    console.warn('No schemas found in OpenAPI spec');
    return enums;
  }

  for (const [schemaName, schema] of Object.entries(
    openAPI.components.schemas,
  )) {
    // Check if this is an enum (has enum property)
    if (schema.enum && Array.isArray(schema.enum)) {
      const enumType = schema.type || 'string';
      const values = schema.enum.map((value: unknown) => String(value));

      enums.push({
        name: convertToUpperCase(schemaName),
        values,
        type: enumType as 'string' | 'integer',
      });
    }
  }

  return enums;
}

function generateConstantsFile(enums: EnumDefinition[]): string {
  let output = `/**
 * Auto-generated enums from OpenAPI schema
 * Generated on: ${new Date().toISOString()}
 */

`;

  enums.forEach((enumDef) => {
    output += `/**
 * ${enumDef.name}
 */
`;

    if (enumDef.type === 'string') {
      // For string enums, use regular enum (can be used as type directly)
      output += `export enum ${enumDef.name} {\n`;
      enumDef.values.forEach((value) => {
        const key = value.toUpperCase().replace(/[^A-Z0-9_]/g, '_');
        output += `  ${key} = "${value}",\n`;
      });
      output += `}\n\n`;
    } else {
      // For integer enums, use const array with union type
      const originalName = enumDef.name.replace(/_/g, ''); // Remove underscores for const name
      const pascalCaseName =
        originalName.charAt(0).toUpperCase() +
        originalName.slice(1).toLowerCase();

      output += `export const ${originalName} = [${enumDef.values.join(', ')}] as const;\n\n`;
      output += `export type ${pascalCaseName} = typeof ${originalName}[number];\n\n`;
    }
  });

  return output;
}

function main() {
  try {
    const outputPath = path.join(
      process.cwd(),
      'src/types/constants.ts',
    );

    console.log('Extracting enums from OpenAPI spec...');
    const enums = extractEnumsFromOpenAPI();

    console.log(`Found ${enums.length} enums:`);
    enums.forEach((enumDef) => {
      console.log(
        `  - ${enumDef.name} (${enumDef.type}): ${enumDef.values.length} values`,
      );
    });

    if (enums.length === 0) {
      console.log('No enums found in OpenAPI spec');
      return 0;
    }

    console.log('Generating enum file...');
    const enumContent = generateConstantsFile(enums);

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, enumContent);
    console.log(`Generated constants file: ${outputPath}`);

    return enums.length;
  } catch (error) {
    console.error('❌ Error generating enums and constants:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateConstants };
