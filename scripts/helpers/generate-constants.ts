#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface EnumInfo {
  name: string;
  originalName: string; // Original schema name
  values: Record<string, string | number>;
  description?: string;
  type: 'string' | 'integer';
  valueDescriptions?: string[];
}

function convertToUpperCase(name: string): string {
  return name
    .replace(/([A-Z]+)(?=[A-Z][a-z]|$)/g, '$1_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toUpperCase()
    .replace(/__+/g, '_')
    .replace(/_+$/, '');
}

function extractEnumsFromOpenAPI(): EnumInfo[] {
  const openAPIPath = path.resolve(OPEN_API_SCHEMA_PATH);
  const content = fs.readFileSync(openAPIPath, 'utf8');
  const schema = yaml.load(content) as any;
  
  const enums: EnumInfo[] = [];
  
  if (!schema.components?.schemas) {
    return enums;
  }

  for (const [name, schemaDef] of Object.entries(schema.components.schemas)) {
    const def = schemaDef as any;
    // Check if it's an enum
    if (def.enum && Array.isArray(def.enum)) {
      const values: Record<string, string | number> = {};
      const enumType = def.type || 'string';
      
      // Populate the values object
      def.enum.forEach((value: string | number, index: number) => {
        // Convert value to a valid enum key
        const key = typeof value === 'string' 
          ? value
              .replace(/([A-Z]+)(?=[A-Z][a-z]|$)/g, '$1_')
              .replace(/([a-z])([A-Z])/g, '$1_$2')
              .toUpperCase()
              .replace(/__+/g, '_')
              .replace(/_+$/, '')
          : `VALUE_${value}`;
        values[key] = value;
      });
      
      enums.push({
        name: convertToUpperCase(name),
        originalName: name,
        values,
        description: (def.title ? `${def.title}. ` : '') + (def.description || `Auto-generated enum for ${name}`),
        type: enumType as 'string' | 'integer',
        valueDescriptions: def['x-enum-descriptions'] || []
      });
    }
  }
  
  return enums;
}

function generateEnumFile(enums: EnumInfo[]): string {
  let content = `/**
 * Auto-generated const objects and arrays from OpenAPI specification
 *
 * This file contains constant objects and arrays derived from OpenAPI schema enums.
 * Each constant provides both an object form (for key-value access) and an array form (for iteration/validation).
 * These constants use existing types from schemas.ts to avoid duplication and ensure type safety.
 *
 * @remarks
 * - String enums generate both objects and arrays with proper type annotations
 * - Integer enums generate typed arrays only
 * - All constants use 'as const' for maximum type safety
 * - Keys follow SCREAMING_SNAKE_CASE convention for consistency
 *
 * @example
 * \`\`\`typescript
 * // Using the object form for key-value access
 * const status = BULK_OPERATION_STATUS.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = BULK_OPERATION_STATUS_VALUES;
 * \`\`\`
 */

import { ${enums.map(e => e.originalName).join(', ')} } from './schemas';

`;

  enums.forEach(enumInfo => {
    const typeName = enumInfo.originalName;
    const valueCount = Object.keys(enumInfo.values).length;
    const enumType = enumInfo.type === 'integer' ? 'integer' : 'string';
    
    // Generate comprehensive TSDoc comment
    content += `/**
 * ${enumInfo.description || `${typeName} enum constants`}
 *
 * @remarks
 * This constant provides ${enumInfo.type === 'integer' ? 'an array of integer values' : 'both object and array forms'} for the ${typeName} enum.
 * ${enumInfo.type === 'integer' ? 'Integer enums are represented as typed arrays for efficient iteration and validation.' : 'The object form allows key-value access, while the array form enables iteration and validation.'}
 *
 * @example
 * ${enumInfo.type === 'integer' ? 
   `\`\`\`typescript
 * // Using the array for iteration
 * const algorithms = DNSSEC_ALGORITHM;
 * console.log(\`Available algorithms: \${algorithms.join(', ')}\`);
 * \`\`\`` :
   `\`\`\`typescript
 * // Using the object form for key-value access
 * const status = ${enumInfo.name}.SUCCESS;
 * 
 * // Using the array form for iteration
 * const allStatuses = ${enumInfo.name}_VALUES;
 * console.log(\`Available statuses: \${allStatuses.join(', ')}\`);
 * \`\`\``
 }
 *
 * @see {@link ${typeName}} - The TypeScript type definition
 */
`;
    
    if (enumInfo.type === 'integer') {
      // Generate array for integer enums
      const values = Object.values(enumInfo.values);
      content += `export const ${enumInfo.name}: ${typeName}[] = [${values.join(', ')}] as const;\n\n`;
    } else {
      // Generate const object for string enums
      content += `export const ${enumInfo.name} = {\n`;
      Object.entries(enumInfo.values).forEach(([key, value]) => {
        const valueStr = typeof value === 'string' ? `"${value}"` : value;
        content += `  ${key}: ${valueStr},\n`;
      });
      content += `} as const satisfies Record<string, ${typeName}>;\n\n`;
      
      // Generate array for string enums as well
      const stringValues = Object.values(enumInfo.values).map(value => 
        typeof value === 'string' ? `"${value}"` : value
      );
      content += `/**
 * Array of all ${typeName} enum values
 *
 * @remarks
 * This constant provides a array containing all valid ${typeName} enum values.
 * Useful for iteration, validation, and generating dynamic UI components.
 *
 * @example
 * \`\`\`typescript
 * // Iterating through all values
 * for (const value of ${enumInfo.name}_VALUES) {
 *   console.log(\`Processing: \${value}\`);
 * }
 * 
 * // Validation
 * const isValid = ${enumInfo.name}_VALUES.includes(someValue);
 * \`\`\`
 *
 * @see {@link ${typeName}} - The TypeScript type definition
 * @see {@link ${enumInfo.name}} - The object form of this enum
 */
export const ${enumInfo.name}_VALUES: ${typeName}[] = [${stringValues.join(', ')}] as const;\n\n`;
    }
  });
  return content;
}

function main() {
  try {
    // Extract enums from the OpenAPI YAML file
    const enums = extractEnumsFromOpenAPI();
    
    console.log(`Found ${enums.length} constants:`);
    enums.forEach(enumInfo => {
      console.log(`  - ${enumInfo.name} (${enumInfo.type}): ${Object.keys(enumInfo.values).length} values`);
    });

    // Generate constants file
    const constantsContent = generateEnumFile(enums);
    
    // Write to file
    const outputPath = path.resolve('src/helpers/constants.ts');
    fs.writeFileSync(outputPath, constantsContent);
    
    console.log(`\nConstants written to: ${outputPath}`);
    
    return enums.length;
  } catch (error) {
    console.error('Error generating enums:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateConstants }; 