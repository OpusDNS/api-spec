#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface EnumInfo {
  name: string;
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
      enums.push({
        name: convertToUpperCase(name),
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
 * Auto-generated enums from OpenAPI specification
 *
 * Each enum is derived from the OpenAPI schema and includes descriptions for better developer understanding.
 */

`;

  enums.forEach(enumInfo => {
    if (enumInfo.description) {
      content += `/**
 * ${enumInfo.description}
 */
`;
    }
    if (enumInfo.type === 'string') {
      content += `export enum ${enumInfo.name} {\n`;
      Object.entries(enumInfo.values).forEach(([key, value], idx) => {
        const valueStr = typeof value === 'string' ? `"${value}"` : value;
        const valueDesc = enumInfo.valueDescriptions && enumInfo.valueDescriptions[idx] ? ` // ${enumInfo.valueDescriptions[idx]}` : '';
        content += `  ${key} = ${valueStr},${valueDesc}\n`;
      });
      content += `}\n\n`;
    } else {
      const originalName = enumInfo.name.replace(/_/g, '');
      const pascalCaseName = originalName.charAt(0).toUpperCase() + originalName.slice(1).toLowerCase();
      content += `export const ${originalName} = [${Object.values(enumInfo.values).join(', ')}] as const;\n\n`;
      content += `export type ${pascalCaseName} = typeof ${originalName}[number];\n\n`;
    }
  });
  return content;
}

function main() {
  try {
    // Extract enums from the OpenAPI YAML file
    const enums = extractEnumsFromOpenAPI();
    
    console.log(`Found ${enums.length} enums:`);
    enums.forEach(enumInfo => {
      console.log(`  - ${enumInfo.name} (${enumInfo.type}): ${Object.keys(enumInfo.values).length} values`);
    });

    // Generate enum file
    const enumContent = generateEnumFile(enums);
    
    // Write to file
    const outputPath = path.resolve('src/helpers/enums.ts');
    fs.writeFileSync(outputPath, enumContent);
    
    console.log(`\nEnums written to: ${outputPath}`);
    
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

export { main as generateEnums }; 