#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface SchemaInfo {
  name: string;
  title: string;
  properties: Record<string, unknown>;
  required?: string[];
  path: string;
  operation: string;
}

interface TypeInfo {
  name: string;
  schemaName: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveSchemaRef(ref: string, spec: any): any {
  if (!ref.startsWith('#/components/schemas/')) {
    return null;
  }
  const schemaName = ref.replace('#/components/schemas/', '');
  return spec.components?.schemas?.[schemaName] || null;
}

function extractExistingTypes(validSchemas: Set<string>): TypeInfo[] {
  const typesPath = path.join(process.cwd(), 'src/helpers/types.ts');
  const typesContent = fs.readFileSync(typesPath, 'utf8');

  const types: TypeInfo[] = [];
  const exportTypeRegex =
    /export type (\w+) = components\['schemas'\]\['([^']+)'\];/g;

  let match;
  while ((match = exportTypeRegex.exec(typesContent)) !== null) {
    const typeName = match[1];
    const schemaName = match[2];

    // Only include main types (not array types or pagination types) that reference valid schemas
    if (
      !typeName.endsWith('Array') &&
      !typeName.startsWith('Pagination_') &&
      validSchemas.has(schemaName)
    ) {
      types.push({ name: typeName, schemaName });
    }
  }

  return types;
}

function extractSchemasFromOpenAPI(openAPIContent: string): SchemaInfo[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spec = yaml.load(openAPIContent) as any;

    if (!spec.paths) {
      throw new Error('No paths found in OpenAPI specification');
    }

    const schemas: SchemaInfo[] = [];
    const processedSchemas = new Set<string>();

    // Iterate through all paths
    for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const path = pathObj as any;

      // Check for GET operations
      if (path.get && path.get.responses && path.get.responses['200']) {
        const response = path.get.responses['200'];
        let schema = null;

        if (response.content && response.content['application/json']) {
          schema = response.content['application/json'].schema;
        } else if (response.schema) {
          schema = response.schema;
        }

        if (schema) {
          let schemaObj = null;
          let schemaName = '';

          if (schema.$ref) {
            schemaObj = resolveSchemaRef(schema.$ref, spec);
            schemaName = schema.$ref.replace('#/components/schemas/', '');
          } else {
            schemaObj = schema;
            schemaName = `Response_${pathKey.replace(/\//g, '_').replace(/[^a-zA-Z0-9_]/g, '')}`;
          }

          if (schemaObj && !processedSchemas.has(schemaName)) {
            processedSchemas.add(schemaName);
            schemas.push({
              name: schemaName,
              title: schemaObj.title || '',
              properties: schemaObj.properties || {},
              required: schemaObj.required || [],
              path: pathKey,
              operation: 'GET',
            });
          }
        }
      }
    }

    return schemas;
  } catch (error) {
    console.error('Error parsing OpenAPI specification:', error);
    return [];
  }
}

function generateKeysFile(
  existingTypes: TypeInfo[],
  schemas: SchemaInfo[],
): string {
  const lines: string[] = [
    '/**',
    ' * Key constants for OpusDNS API response objects.',
    ' *',
    ' * This file is auto-generated from the OpenAPI specification.',
    ' * Do not edit manually.',
    ' */',
    '',
  ];

  // Create a map of schema names to their properties
  const schemaPropertiesMap = new Map<string, Record<string, unknown>>();
  schemas.forEach((schema) => {
    schemaPropertiesMap.set(schema.name, schema.properties);
  });

  // Generate imports for existing types only
  const imports = existingTypes.map((type) => {
    return `import { ${type.name} } from './types';`;
  });

  lines.push(...imports);
  lines.push('');

  // Generate keys for each existing type
  existingTypes.forEach((type) => {
    const properties = schemaPropertiesMap.get(type.schemaName);

    if (!properties) {
      return;
    }

    // Convert camelCase type name to UPPER_CASE with underscores
    const typeNameUpper = type.name
      .replace(/([A-Z])/g, '_$1')
      .toUpperCase()
      .replace(/^_/, '') // Remove leading underscore
      .replace(/__+/g, '_'); // Replace multiple underscores with single underscore

    // Generate individual key constants
    const keyConstants = Object.keys(properties).map((prop) => {
      const keyName = prop.toUpperCase();
      return `export const ${typeNameUpper}_KEY_${keyName} = '${prop}' as keyof ${type.name};`;
    });

    // Generate keys array
    const keysArray = Object.keys(properties).map((prop) => {
      const keyName = prop.toUpperCase();
      return `  ${typeNameUpper}_KEY_${keyName},`;
    });

    lines.push(...keyConstants);
    lines.push('');
    lines.push(`export const ${typeNameUpper}_KEYS = [`);
    lines.push(...keysArray);
    lines.push('] as const;');
    lines.push('');
  });

  return lines.join('\n');
}

function main() {
  const openAPIContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf8');
  const schemas = extractSchemasFromOpenAPI(openAPIContent);

  if (schemas.length === 0) {
    console.error('❌ No schemas found in OpenAPI specification');
    process.exit(1);
  }

  // Create a set of valid schema names
  const validSchemas = new Set(schemas.map((schema) => schema.name));

  // Extract existing types from types.ts file, filtering for valid schemas
  const existingTypes = extractExistingTypes(validSchemas);

  if (existingTypes.length === 0) {
    console.error('❌ No valid types found in types.ts file');
    process.exit(1);
  }

  const keysContent = generateKeysFile(existingTypes, schemas);
  const outputPath = path.join(process.cwd(), 'src/helpers/keys.ts');
  fs.writeFileSync(outputPath, keysContent);

  console.log(
    `✅ Generated key constants for ${existingTypes.length} existing types in ${outputPath}`,
  );
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  extractExistingTypes,
  extractSchemasFromOpenAPI,
  main as generateKeys,
  generateKeysFile,
};
