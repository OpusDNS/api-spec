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
  const schemasPath = path.join(process.cwd(), 'src/helpers/schemas.ts');
  const schemasContent = fs.readFileSync(schemasPath, 'utf8');

  const types: TypeInfo[] = [];
  const exportTypeRegex =
    /export type (\w+) = components\['schemas'\]\['([^']+)'\];/g;

  let match;
  while ((match = exportTypeRegex.exec(schemasContent)) !== null) {
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

    if (!spec.components?.schemas) {
      throw new Error('No schemas found in OpenAPI specification');
    }

    const schemas: SchemaInfo[] = [];

    // Extract all schemas from components.schemas
    for (const [schemaName, schemaObj] of Object.entries(spec.components.schemas)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const schema = schemaObj as any;
      
      if (schema && typeof schema === 'object') {
        schemas.push({
          name: schemaName,
          title: schema.title || '',
          properties: schema.properties || {},
          required: schema.required || [],
          path: '', // Not applicable for all schemas
          operation: '', // Not applicable for all schemas
        });
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
    ' * Key constants for OpusDNS API response objects',
    ' *',
    ' * This file contains TypeScript constants for API response object property keys.',
    ' * Each key constant provides a type-safe way to access properties of API response objects.',
    ' * These constants are derived from OpenAPI schema properties and include comprehensive descriptions.',
    ' *',
    ' * @remarks',
    ' * - Individual key constants follow the pattern: \`KEY_TYPE_NAME_PROPERTY_NAME\`',
    ' * - Key arrays follow the pattern: \`KEYS_TYPE_NAME\` and are typed as \`readonly (keyof TypeName)[]\`',
    ' * - All keys are typed with \`as keyof TypeName\` for type safety',
    ' * - Key constants include descriptions from the OpenAPI schema',
    ' * - These constants ensure type safety when accessing response object properties',
    ' *',
    ' * @example',
    ' * \`\`\`typescript',
    ' * // Using key constants for type-safe property access',
    ' * const domainName = domain[KEY_DOMAIN_NAME];',
    ' * const domainStatus = domain[KEY_DOMAIN_STATUS];',
    ' *',
    ' * // Using key arrays for iteration',
    ' * const allKeys = KEYS_DOMAIN;',
    ' * for (const key of allKeys) {',
    ' *   console.log(domain[key]);',
    ' * }',
    ' * \`\`\`',
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

  // Filter types to only include those that have properties (object schemas)
  const typesWithProperties = existingTypes.filter((type) => {
    const properties = schemaPropertiesMap.get(type.schemaName);
    return properties && Object.keys(properties).length > 0;
  });

  // Generate imports for types with properties only
  const imports = typesWithProperties.map((type) => {
    // Special case: if type.name === 'Event', import 'EventResponse' instead
    if (type.name === 'Event') {
      return `import { EventResponse } from './schemas';`;
    }
    return `import { ${type.name} } from './schemas';`;
  });

  lines.push(...imports);
  lines.push('');

  // Generate keys for each type with properties
  typesWithProperties.forEach((type) => {
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
    Object.entries(properties).forEach(([prop, propDef]) => {
      const keyName = prop.toUpperCase();
      let title = '';
      let description = '';
      let propType = '';
      let required = false;
      
      if (propDef && typeof propDef === 'object') {
        const propObj = propDef as any;
        title = propObj.title || '';
        description = propObj.description || '';
        propType = propObj.type || '';
        required = Array.isArray(properties.required) && properties.required.includes(prop);
      }
      
      // Generate comprehensive TSDoc comment
      lines.push(`/**
 * ${title || `${prop} property`}
 *${description ? `\n * ${description}` : ''}
 *${propType ? `\n * @type {${propType}}` : ''}
 *${required ? '\n * @required' : ''}
 *
 * @remarks
 * This key constant provides type-safe access to the \`${prop}\` property of ${type.name} objects.
 * Use this constant when you need to access properties dynamically or ensure type safety.
 *
 * @example
 * \`\`\`typescript
 * // Direct property access
 * const value = ${type.name.toLowerCase()}[KEY_${typeNameUpper}_${keyName}];
 * 
 * // Dynamic property access
 * const propertyName = KEY_${typeNameUpper}_${keyName};
 * const value = ${type.name.toLowerCase()}[propertyName];
 * \`\`\`
 *
 * @see {@link ${type.name}} - The TypeScript type definition
 * @see {@link KEYS_${typeNameUpper}} - Array of all keys for this type
 */
export const KEY_${typeNameUpper}_${keyName} = '${prop}' as keyof ${type.name};`);
    });

    // Generate keys array
    const keysArray = Object.keys(properties).map((prop) => {
      const keyName = prop.toUpperCase();
      return `  KEY_${typeNameUpper}_${keyName},`;
    });

    lines.push('');
    lines.push(`/**
 * Array of all ${type.name} property keys
 *
 * @remarks
 * This constant provides a readonly array containing all valid property keys for ${type.name} objects.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * \`\`\`typescript
 * // Iterating through all keys
 * for (const key of KEYS_${typeNameUpper}) {
 *   console.log(\`Property: \${key}, Value: \${${type.name.toLowerCase()}[key]}\`);
 * }
 * 
 * // Validation
 * const isValidKey = KEYS_${typeNameUpper}.includes(someKey);
 * \`\`\`
 *
 * @see {@link ${type.name}} - The TypeScript type definition
 */
export const KEYS_${typeNameUpper} = [`);
    lines.push(...keysArray);
    lines.push(`] as const satisfies (keyof ${type.name})[];`);
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

  // Extract existing types from schemas.ts file, filtering for valid schemas
  const existingTypes = extractExistingTypes(validSchemas);

  if (existingTypes.length === 0) {
    console.error('❌ No valid types found in schemas.ts file');
    process.exit(1);
  }

  // Create a map of schema names to their properties
  const schemaPropertiesMap = new Map<string, Record<string, unknown>>();
  schemas.forEach((schema) => {
    schemaPropertiesMap.set(schema.name, schema.properties);
  });

  // Filter types to only include those that have properties (object schemas)
  const typesWithProperties = existingTypes.filter((type) => {
    const properties = schemaPropertiesMap.get(type.schemaName);
    return properties && Object.keys(properties).length > 0;
  });

  const keysContent = generateKeysFile(existingTypes, schemas);
  const outputPath = path.join(process.cwd(), 'src/helpers/keys.ts');
  fs.writeFileSync(outputPath, keysContent);

  console.log(
    `✅ Generated key constants for ${typesWithProperties.length} types with properties in ${outputPath}`,
  );

  return typesWithProperties.length;
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
