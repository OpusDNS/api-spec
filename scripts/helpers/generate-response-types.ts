#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface ResponseInfo {
  path: string;
  method: string;
  operationId: string;
  responseType: string;
  schemaRef: string;
}

function generateResponseTypeName(path: string, method: string): string {
  // Remove leading slash and version prefix (v1/)
  let name = path.replace(/^\//, '').replace(/^v1\//, '');

  // Handle path parameters like {contact_id} -> BycontactId
  name = name.replace(
    /\{([\w_]+)\}/g,
    (_m, param) => `By${param.charAt(0).toUpperCase() + param.slice(1)}`,
  );

  // Convert underscores, hyphens, and slashes to PascalCase
  name = name
    .replace(/[_-]/g, '/')
    .split('/')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');

  // Add method prefix
  const methodPrefix =
    method.charAt(0).toUpperCase() + method.slice(1).toLowerCase();

  return `${methodPrefix}_${name}_Response_V1`;
}

function extractResponseTypesFromOpenAPI(
  openAPIContent: string,
): ResponseInfo[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spec = yaml.load(openAPIContent) as any;

    if (!spec.paths) {
      throw new Error('No paths found in OpenAPI specification');
    }

    const responses: ResponseInfo[] = [];
    const processedResponses = new Set<string>();

    // Iterate through all paths
    for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const path = pathObj as any;

      // Check each HTTP method
      const methods = ['get', 'post', 'put', 'patch', 'delete'];

      for (const method of methods) {
        if (path[method]) {
          const operation = path[method];

          // Look for success responses (200, 201, 204)
          const successCodes = ['200', '201', '204'];
          let responseSchema = null;

          for (const code of successCodes) {
            if (
              operation.responses?.[code]?.content?.['application/json']?.schema
            ) {
              responseSchema =
                operation.responses[code].content['application/json'].schema;
              break;
            }
          }

          if (responseSchema) {
            let schemaRef: string;

            // Handle $ref
            if (responseSchema.$ref) {
              schemaRef = responseSchema.$ref.replace(
                '#/components/schemas/',
                '',
              );
            } else {
              // Skip inline schemas that don't have proper $ref values
              // These would generate invalid schema names
              continue;
            }

            const responseTypeName = generateResponseTypeName(pathKey, method);
            const uniqueKey = `${pathKey}:${method}:${schemaRef}`;

            if (!processedResponses.has(uniqueKey)) {
              processedResponses.add(uniqueKey);

              responses.push({
                path: pathKey,
                method: method.toUpperCase(),
                operationId:
                  operation.operationId ||
                  `${method}_${pathKey.replace(/[^a-zA-Z0-9]/g, '_')}`,
                responseType: responseTypeName,
                schemaRef: schemaRef,
              });
            }
          }
        }
      }
    }

    return responses.sort((a, b) =>
      a.responseType.localeCompare(b.responseType),
    );
  } catch (error) {
    console.error('Error parsing OpenAPI YAML:', error);
    throw error;
  }
}

function generateResponseTypesContent(responses: ResponseInfo[]): string {
  const lines: string[] = [];

  // Track used type names to avoid duplicates
  const usedTypeNames = new Set<string>();

  responses.forEach(({ responseType, schemaRef }) => {
    let typeName = responseType;

    // Ensure uniqueness
    const originalTypeName = typeName;
    let i = 2;
    while (usedTypeNames.has(typeName)) {
      typeName = `${originalTypeName}${i}`;
      i++;
    }
    usedTypeNames.add(typeName);

    lines.push(
      `export type ${typeName} = components['schemas']['${schemaRef}'];`,
    );
  });

  return lines.join('\n');
}

function appendResponseTypesToFile(
  responses: ResponseInfo[],
  typesFilePath: string,
): void {
  // Read existing content
  const existingContent = fs.readFileSync(typesFilePath, 'utf-8');

  // Generate response types content
  let responseTypesContent = `\n/** \n * Response Types\n*/\n`;
  responseTypesContent += generateResponseTypesContent(responses);

  // Append to the end of the file
  const newContent = existingContent + responseTypesContent;
  fs.writeFileSync(typesFilePath, newContent);
}

function main() {
  try {
    const openAPIContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');

    // Extract response types
    const responses = extractResponseTypesFromOpenAPI(openAPIContent);

    const typesOutputPath = path.join(
      process.cwd(),
      'src/helpers/types.ts',
    );

    // Append response data types to the existing file
    appendResponseTypesToFile(responses, typesOutputPath);

    console.log(
      `✅ Generated ${responses.length} response type definitions and appended to ${typesOutputPath}`,
    );

    return responses.length;
  } catch (error) {
    console.error('❌ Error generating response types:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateResponseTypes };
