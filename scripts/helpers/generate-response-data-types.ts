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

  // Check if this is a pagination type (name starts with 'Pagination_' and has 'results' property of type 'array')
  const isPaginationType = typeName.startsWith('Pagination_');
  const resultsProperty = properties.results as
    | { type?: string; items?: { $ref?: string } }
    | undefined;
  if (isPaginationType && resultsProperty && resultsProperty.type === 'array') {
    // For pagination types, create array types that reference the response types
    const resultsTypeName = typeName
      .replace(/^Pagination_/, '')
      .replace(/Response$/, '');

    // Find the corresponding response type name
    const responseTypeName = findResponseTypeName(schema.name);
    if (responseTypeName) {
      return `export type ${resultsTypeName}Array = ${responseTypeName}['results'];`;
    }

    // Fallback to direct schema reference if no response type found
    return `export type ${resultsTypeName}Array = components['schemas']['${schema.name}']['results'];`;
  }

  // For non-pagination types, check if they have array properties
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
    return `${typeContent}\n${arrayTypes}`;
  }

  return `export type ${typeName} = components['schemas']['${schema.name}'];`;
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

function main() {
  try {
    const openAPIContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');
    const schemas = extractSchemasFromOpenAPI(openAPIContent);

    // Generate response types content
    const responseTypesContent = generateResponseDataTypesContent(schemas);
    const typesOutputPath = path.join(
      process.cwd(),
      'src/helpers/types.ts',
    );

    // Append response types to the existing file
    const existingContent = fs.readFileSync(typesOutputPath, 'utf-8');
    const newContent =
      existingContent +
      '\n/** \n * Response Data Types\n*/\n' +
      responseTypesContent;
    fs.writeFileSync(typesOutputPath, newContent);

    console.log(
      `✅ Generated ${schemas.length} GET response type definitions and appended to ${typesOutputPath}`,
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

export { main as generateResponseDataTypes };
