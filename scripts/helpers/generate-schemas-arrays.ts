#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface ArrayUsage {
  schemaName: string;
  context: string;
  path?: string;
}

function toTypeName(schemaName: string, schema?: any): string {
  // Remove trailing underscores
  let name = schemaName.replace(/_+$/, '');
  // Remove 'BulkOperationResponse_' prefix
  name = name.replace(/^BulkOperationResponse_/, '');
  
  // If name contains double underscores, use the last PascalCase segment
  if (name.includes('__')) {
    const parts = name.split('__');
    // Find the last part that looks like PascalCase
    for (let i = parts.length - 1; i >= 0; i--) {
      if (/^[A-Z][a-zA-Z0-9]*$/.test(parts[i])) {
        name = parts[i];
        break;
      }
    }
    // Fallback: use last segment
    if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
      name = parts[parts.length - 1];
    }
  }
  
  // Remove only 'Response' from the end, keep 'Request' and 'Create'
  name = name.replace(/Response$/, '');
  
  // Special handling for DomainAvailability duplicates (after Response removal)
  if (name === 'DomainAvailability') {
    // Check the path context to create meaningful names
    if (schemaName.includes('availability__datasource')) {
      name = 'DomainAvailabilityList'; // Has meta and results (list response)
    } else if (schemaName.includes('domain__domain')) {
      name = 'DomainAvailabilityCheck'; // Has available, domain, reason (single check)
    }
  }
  
  return name;
}

function findArrayUsagesInOpenAPI(openAPIContent: string): ArrayUsage[] {
  const usages: ArrayUsage[] = [];
  const spec = yaml.load(openAPIContent) as any;

  // Helper function to recursively search for array usages
  function searchForArrays(obj: any, context: string, path?: string) {
    if (!obj || typeof obj !== 'object') return;

    if (obj.type === 'array' && obj.items?.$ref) {
      const schemaName = obj.items.$ref.replace('#/components/schemas/', '');
      usages.push({ schemaName, context, path });
    }

    // Recursively search all object properties
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        searchForArrays(value, context, path);
      }
    }
  }

  // Search in paths
  if (spec.paths) {
    for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const path = pathObj as any;
      
      // Search in parameters
      if (path.parameters) {
        for (const param of path.parameters) {
          searchForArrays(param, 'parameter', pathKey);
        }
      }

      // Search in request bodies
      if (path.requestBody) {
        searchForArrays(path.requestBody, 'requestBody', pathKey);
      }

      // Search in responses
      if (path.responses) {
        for (const [statusCode, response] of Object.entries(path.responses)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const resp = response as any;
          searchForArrays(resp, `response_${statusCode}`, pathKey);
        }
      }

      // Search in operations (get, post, etc.)
      for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
        if (path[method]) {
          const operation = path[method];
          
          // Search in operation parameters
          if (operation.parameters) {
            for (const param of operation.parameters) {
              searchForArrays(param, `operation_${method}_parameter`, pathKey);
            }
          }

          // Search in operation request body
          if (operation.requestBody) {
            searchForArrays(operation.requestBody, `operation_${method}_requestBody`, pathKey);
          }

          // Search in operation responses
          if (operation.responses) {
            for (const [statusCode, response] of Object.entries(operation.responses)) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const resp = response as any;
              searchForArrays(resp, `operation_${method}_response_${statusCode}`, pathKey);
            }
          }
        }
      }
    }
  }

  // Search in components.schemas
  if (spec.components?.schemas) {
    for (const [schemaName, schemaObj] of Object.entries(spec.components.schemas)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const schema = schemaObj as any;
      searchForArrays(schema, 'schema', schemaName);
    }
  }

  return usages;
}

function findArrayUsagesInSchemaDts(): ArrayUsage[] {
  const usages: ArrayUsage[] = [];
  const schemaDtsPath = path.join(process.cwd(), 'src/schema.d.ts');
  
  if (!fs.existsSync(schemaDtsPath)) {
    return usages;
  }

  const content = fs.readFileSync(schemaDtsPath, 'utf8');
  
  // Look for array type references in schema.d.ts
  // This regex looks for patterns like: components["schemas"]["SchemaName"][]
  const arrayRefRegex = /components\["schemas"\]\["([^"]+)"\]\[\]/g;
  let match;
  
  while ((match = arrayRefRegex.exec(content)) !== null) {
    const schemaName = match[1];
    usages.push({ 
      schemaName, 
      context: 'schema.d.ts',
      path: 'schema.d.ts'
    });
  }

  return usages;
}

function generateSchemasArraysContent(arrayUsages: ArrayUsage[]): string {
  const openAPIContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');
  const spec = yaml.load(openAPIContent) as any;
  const lines: string[] = [];
  lines.push('/**');
  lines.push(' * Array type aliases for OpenAPI schemas');
  lines.push(' *');
  lines.push(' * This file contains TypeScript array type aliases for OpenAPI schema objects.');
  lines.push(' * Each array type represents a collection of the corresponding schema type.');
  lines.push(' * These types are used throughout the API for request/response arrays.');
  lines.push(' *');
  lines.push(' * @remarks');
  lines.push(' * - All array types follow the pattern: `TypeNameArray = TypeName[]`');
  lines.push(' * - Array types are automatically generated from OpenAPI schema references');
  lines.push(' * - Each type includes documentation from the original OpenAPI schema');
  lines.push(' * - These types ensure type safety when working with API arrays');
  lines.push(' *');
  lines.push(' * @example');
  lines.push(' * ```typescript');
  lines.push(' * // Using array types for API responses');
  lines.push(' * const domains: DomainArray = await api.getDomains();');
  lines.push(' * const contacts: ContactSchemaArray = await api.getContacts();');
  lines.push(' * ```');
  lines.push(' *');
  lines.push(' * This file is auto-generated from the OpenAPI specification.');
  lines.push(' * Do not edit manually.');
  lines.push(' */');

  // Track used type names to avoid duplicates
  const usedTypeNames = new Set<string>();
  const uniqueUsages = new Map<string, ArrayUsage>();

  // Deduplicate by schema name
  arrayUsages.forEach(usage => {
    if (!uniqueUsages.has(usage.schemaName)) {
      uniqueUsages.set(usage.schemaName, usage);
    }
  });

  // Collect all type names for import
  const typeNames: string[] = [];
  for (const [schemaName, usage] of uniqueUsages) {
    let typeName = toTypeName(schemaName);
    // Special case: if typeName is 'Event', use 'EventResponse' instead
    if (typeName === 'Event') typeName = 'EventResponse';
    // Ensure uniqueness
    const originalTypeName = typeName;
    let i = 2;
    while (usedTypeNames.has(typeName)) {
      typeName = `${originalTypeName}${i}`;
      i++;
    }
    usedTypeNames.add(typeName);
    typeNames.push(typeName);
  }
  // Emit named import for all used types
  lines.push(`import { ${typeNames.join(', ')} } from './schemas.d';`);
  lines.push('');

  // Now emit the array types with comments
  usedTypeNames.clear();
  for (const [schemaName, usage] of uniqueUsages) {
    let typeName = toTypeName(schemaName);
    // Special case: if typeName is 'Event', use 'EventResponse' instead
    if (typeName === 'Event') typeName = 'EventResponse';
    // Ensure uniqueness
    const originalTypeName = typeName;
    let i = 2;
    while (usedTypeNames.has(typeName)) {
      typeName = `${originalTypeName}${i}`;
      i++;
    }
    usedTypeNames.add(typeName);
    let desc = '';
    let title = '';
    if (spec.components && spec.components.schemas && spec.components.schemas[schemaName]) {
      const sch = spec.components.schemas[schemaName];
      title = sch.title || typeName;
      const description = sch.description || '';
      desc = title + (description ? `. ${description}` : '');
    } else {
      title = typeName;
      desc = `${typeName} array type`;
    }
    
    lines.push(`/**`);
    lines.push(` * ${desc}`);
    lines.push(` *`);
    lines.push(` * @remarks`);
    lines.push(` * Array type for ${title} objects. Used when the API returns a collection of ${title} instances.`);
    lines.push(` *`);
    lines.push(` * @example`);
    lines.push(` * \`\`\`typescript`);
    lines.push(` * const items: ${typeName}Array = await api.get${typeName}s();`);
    lines.push(` * \`\`\``);
    lines.push(` *`);
    lines.push(` * @see {@link ${typeName}} - The individual ${title} type definition`);
    lines.push(` */`);
    lines.push(`export type ${typeName}Array = ${typeName}[];`);
  }
  return lines.join('\n');
}

function main() {
  try {
    const openAPIContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');
    
    // Find array usages in OpenAPI YAML
    const openAPIArrayUsages = findArrayUsagesInOpenAPI(openAPIContent);
    
    // Find array usages in schema.d.ts
    const schemaDtsArrayUsages = findArrayUsagesInSchemaDts();
    
    // Combine all array usages
    const allArrayUsages = [...openAPIArrayUsages, ...schemaDtsArrayUsages];
    
    if (allArrayUsages.length === 0) {
      console.log('ℹ️  No array usages found in OpenAPI specification or schema.d.ts');
      return 0;
    }

    // Generate schemas arrays content
    const schemasArraysContent = generateSchemasArraysContent(allArrayUsages);
    const outputPath = path.join(process.cwd(), 'src/helpers/schemas-arrays.d.ts');
    fs.writeFileSync(outputPath, schemasArraysContent);

    console.log(
      `✅ Generated array type aliases for ${new Set(allArrayUsages.map(u => u.schemaName)).size} schemas in ${outputPath}`,
    );

    return allArrayUsages.length;
  } catch (error) {
    console.error('❌ Error generating schemas arrays:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateSchemasArrays };
