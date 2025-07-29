#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface SchemaInfo {
  name: string;
  title: string;
  description?: string;
  properties: Record<string, unknown>;
  required?: string[];
  path: string;
  operation: string;
}
function generateResponseDataTypeName(
  schemaName: string,
  title?: string,
): string {
  // Use the title if present and valid, but clean it up
  if (title && /^[A-Z][a-zA-Z0-9]*$/.test(title)) {
    return title.replace(/Response$/, '').replace(/_+$/, '');
  }

  // Fallback to the schema name, removing 'Response' suffix and trailing underscores
  return schemaName.replace(/Response$/, '').replace(/_+$/, '');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveSchemaRef(ref: string, spec: any): any {
  if (!ref.startsWith('#/components/schemas/')) {
    return null;
  }
  const schemaName = ref.replace('#/components/schemas/', '');
  return spec.components?.schemas?.[schemaName] || null;
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

      // Check if this path has a GET operation
      if (path.get) {
        const getOp = path.get;

        // Look for 200 response
        if (getOp.responses?.['200']?.content?.['application/json']?.schema) {
          const responseSchema =
            getOp.responses['200'].content['application/json'].schema;

          let schemaName: string;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let schemaObj: any;

          // Handle $ref
          if (responseSchema.$ref) {
            schemaObj = resolveSchemaRef(responseSchema.$ref, spec);
            schemaName = responseSchema.$ref.replace(
              '#/components/schemas/',
              '',
            );
          } else {
            schemaObj = responseSchema;
            // Generate a name based on the path
            schemaName =
              pathKey.replace(/[^a-zA-Z0-9]/g, '_').replace(/^_+|_+$/g, '') +
              'Response';
          }

          if (
            schemaObj &&
            schemaObj.properties &&
            !processedSchemas.has(schemaName)
          ) {
            processedSchemas.add(schemaName);

            schemas.push({
              name: schemaName,
              title: schemaObj.title || '',
              description: schemaObj.description || '',
              properties: schemaObj.properties,
              required: schemaObj.required || [],
              path: pathKey,
              operation: 'GET',
            });
          }
        }
      }
    }

    return schemas.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error parsing OpenAPI YAML:', error);
    throw error;
  }
}

function generateTypeContent(schema: SchemaInfo, typeName: string): string {
  const properties = schema.properties as Record<string, unknown>;
  let desc = '';
  if (schema.title || schema.description) {
    desc = `/** ${(schema.title ? schema.title + '. ' : '') + (schema.description || '')} */\n`;
  }
  // Check if this is a pagination type (name starts with 'Pagination_' and has 'results' property of type 'array')
  const isPaginationType = typeName.startsWith('Pagination_');
  const resultsProperty = properties.results as
    | { type?: string; items?: { $ref?: string } }
    | undefined;
  if (isPaginationType && resultsProperty && resultsProperty.type === 'array') {
    const resultsTypeName = typeName
      .replace(/^Pagination_/, '')
      .replace(/Response$/, '');
    const responseTypeName = findResponseTypeName(schema.name);
    if (responseTypeName) {
      return `${desc}export type ${resultsTypeName}Array = ${responseTypeName}['results'];`;
    }
    return `${desc}export type ${resultsTypeName}Array = components['schemas']['${schema.name}']['results'];`;
  }
  const arrayProperties = Object.entries(properties).filter(
    ([, value]) =>
      typeof value === 'object' &&
      value !== null &&
      'type' in value &&
      value.type === 'array',
  );
  if (arrayProperties.length > 0) {
    const typeContent = `export type ${typeName} = components['schemas']['${schema.name}'];`;
    const arrayTypes = arrayProperties
      .map(([propName]) => {
        const arrayTypeName = `${typeName}${propName.charAt(0).toUpperCase() + propName.slice(1)}Array`;
        return `export type ${arrayTypeName} = ${typeName}['${propName}'];`;
      })
      .join('\n');
    return `${desc}${typeContent}\n${arrayTypes}`;
  }
  return `${desc}export type ${typeName} = components['schemas']['${schema.name}'];`;
}

// Helper function to find the corresponding response type name for a pagination schema
function findResponseTypeName(schemaName: string): string | null {
  // Map pagination schema names to their corresponding response type names
  const responseTypeMap: Record<string, string> = {
    Pagination_UserNotificationSummary_: 'Get_Notifications_Response_V1',
    Pagination_ContactSchema_: 'Get_Contacts_Response_V1',
    Pagination_DnsZoneResponse_: 'Get_Dns_Response_V1',
    Pagination_DomainResponse_: 'Get_Domains_Response_V1',
    Pagination_EmailForward_: 'Get_EmailForwards_Response_V1',
    Pagination_EventResponse_: 'Get_Event_Response_V1',
    Pagination_Organization_: 'Get_Organizations_Response_V1',
    Pagination_User_: 'Get_OrganizationsUsers_Response_V1',
    Pagination_OrganizationCredential_: 'Get_AuthClientCredentials_Response_V1',
  };

  return responseTypeMap[schemaName] || null;
}

function generateResponseDataTypesContent(schemas: SchemaInfo[]): string {
  const lines: string[] = [];

  // Track used type names to avoid duplicates
  const usedTypeNames = new Set<string>();

  schemas.forEach(({ name, title, properties }) => {
    let typeName = generateResponseDataTypeName(name, title);
    // Ensure uniqueness
    const originalTypeName = typeName;
    let i = 2;
    while (usedTypeNames.has(typeName)) {
      typeName = `${originalTypeName}${i}`;
      i++;
    }
    usedTypeNames.add(typeName);

    lines.push(
      generateTypeContent(
        { name, title, properties, required: [], path: '', operation: '' },
        typeName,
      ),
    );
  });

  return lines.join('\n');
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
  
  // Special handling for EventResponse to avoid conflict with native Event type
  if (name === 'EventResponse') {
    return name; // Keep Response suffix to avoid conflict
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

function generateDirectSchemaAliases(openAPIContent: string): string {
  // Parse the OpenAPI YAML
  const spec = yaml.load(openAPIContent) as any;
  const schemas = spec.components?.schemas || {};
  const lines: string[] = [];
  lines.push('/**');
  lines.push(' * Direct type aliases for OpenAPI schemas.');
  lines.push(' * This file is auto-generated from the OpenAPI specification.');
  lines.push(' * Do not edit manually.');
  lines.push(' */');
  lines.push("import { components } from '../schema';\n");
  // Track used type names to avoid duplicates
  const usedTypeNames = new Set<string>();
  Object.keys(schemas).sort().forEach((schemaName) => {
    let typeName = toTypeName(schemaName);
    // Ensure uniqueness
    const originalTypeName = typeName;
    let i = 2;
    while (usedTypeNames.has(typeName)) {
      typeName = `${originalTypeName}${i}`;
      i++;
    }
    usedTypeNames.add(typeName);
    lines.push(`export type ${typeName} = components['schemas']['${schemaName}'];`);
  });
  return lines.join('\n');
}

function main() {
  try {
    const openAPIContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');
    const schemas = extractSchemasFromOpenAPI(openAPIContent);

    // Generate direct schema aliases first
    const directAliasesContent = generateDirectSchemaAliases(openAPIContent);
    
    // Generate response types content
    const responseTypesContent = generateResponseDataTypesContent(schemas);
    
    // Combine both contents
    const combinedContent = directAliasesContent + '\n' + responseTypesContent;
    
    // Write the combined content to the file
    const outputPath = path.join(process.cwd(), 'src/helpers/schemas.ts');
    
    // Ensure the directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, combinedContent);
    
    console.log(
      `✅ Generated ${schemas.length} GET response type definitions in ${outputPath}`,
    );
    console.log(
      `✅ Generated direct schema aliases for ${Object.keys((yaml.load(openAPIContent) as any).components?.schemas || {}).length} schemas in ${outputPath}`,
    );

    return schemas.length;
  } catch (error) {
    console.error('❌ Error generating response types:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateSchemas };
