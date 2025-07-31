#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface ResponseInfo {
  path: string;
  method: string;
  operationId: string;
  responseCode: string;
  schemaRef: string;
  contentType: string;
}

interface GroupedResponses {
  [pathKey: string]: {
    [method: string]: {
      [responseCode: string]: string;
    };
  };
}

function generatePathName(path: string): string {
  // Remove leading slash and version prefix (v1/)
  let name = path.replace(/^\//, '').replace(/^v1\//, '');

  // Handle path parameters like {contact_id} -> ByContactId
  name = name.replace(
    /\{([\w_]+)\}/g,
    (_m, param) => {
      // Convert snake_case to PascalCase for the parameter name
      const pascalParam = param
        .split('_')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('');
      return `By${pascalParam}`;
    },
  );

  // Convert underscores, hyphens, and slashes to PascalCase
  name = name
    .replace(/[_-]/g, '/')
    .split('/')
    .map((part) => {
      // If the part already looks like PascalCase (starts with uppercase), preserve it
      if (/^[A-Z]/.test(part)) {
        return part;
      }
      // Otherwise, convert to PascalCase
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join('');

  return name;
}

function generatePathBasedTypeName(path: string, method: string): string {
  // Convert path to PascalCase, skipping the version prefix
  const pathParts = path
    .split('/')
    .filter(part => part.length > 0)
    .filter(part => part !== 'v1') // Skip the version prefix
    .map(part => {
      // Handle path parameters like {domain_reference}
      if (part.startsWith('{') && part.endsWith('}')) {
        return part.slice(1, -1).split('_').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
      }
      // Handle hyphens by converting to PascalCase
      if (part.includes('-')) {
        return part.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
      }
      return part.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
    });
  
  return `${method}_${pathParts.join('')}`;
}

function extractResponseTypesFromOpenAPI(
  openAPIContent: string,
): GroupedResponses {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spec = yaml.load(openAPIContent) as any;

    if (!spec.paths) {
      throw new Error('No paths found in OpenAPI specification');
    }

    const groupedResponses: GroupedResponses = {};

    // Iterate through all paths
    for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const path = pathObj as any;

      // Check each HTTP method
      const methods = ['get', 'post', 'put', 'patch', 'delete'];

      for (const method of methods) {
        if (path[method]) {
          const operation = path[method];

          // Check all responses
          if (operation.responses) {
            const pathName = generatePathName(pathKey);
            
            if (!groupedResponses[pathName]) {
              groupedResponses[pathName] = {};
            }
            
            if (!groupedResponses[pathName][method.toUpperCase()]) {
              groupedResponses[pathName][method.toUpperCase()] = {};
            }

            for (const [responseCode, responseObj] of Object.entries(operation.responses)) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const response = responseObj as any;
              
              // Check for content
              if (response.content) {
                for (const [contentType, contentObj] of Object.entries(response.content)) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const content = contentObj as any;
                  
                  if (content.schema) {
                    let schemaRef: string | undefined;

                    // Handle $ref (object)
                    if (content.schema.$ref) {
                      schemaRef = content.schema.$ref.replace(
                        '#/components/schemas/',
                        '',
                      );
                    }
                    // Handle array of $ref
                    else if (content.schema.type === 'array' && content.schema.items && content.schema.items.$ref) {
                      schemaRef = content.schema.items.$ref.replace(
                        '#/components/schemas/',
                        '',
                      ) + '[]';
                    } else {
                      // Skip inline schemas that don't have proper $ref values
                      continue;
                    }

                    if (schemaRef !== undefined) {
                      groupedResponses[pathName][method.toUpperCase()][responseCode] = schemaRef;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return groupedResponses;
  } catch (error) {
    console.error('Error parsing OpenAPI YAML:', error);
    throw error;
  }
}

// Helper: Build a map of OpenAPI schema names to TypeScript aliases from schemas.ts
function getSchemaAliasMap(): Record<string, string> {
  const schemasFile = path.join(process.cwd(), 'src/helpers/schemas.ts');
  const content = fs.readFileSync(schemasFile, 'utf8');
  const aliasMap: Record<string, string> = {};
  const regex = /export type (\w+) = components\['schemas'\]\['(\w+)'\];/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const alias = match[1];
    const openapiName = match[2];
    aliasMap[openapiName] = alias;
  }
  return aliasMap;
}

// Helper: Build a map of TypeScript element aliases to array aliases from schemas-arrays.ts
function getArrayAliasMap(): Record<string, string> {
  const arraysFile = path.join(process.cwd(), 'src/helpers/schemas-arrays.ts');
  const content = fs.readFileSync(arraysFile, 'utf8');
  const aliasMap: Record<string, string> = {};
  const regex = /export type (\w+Array) = (\w+)\[\];/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const arrayAlias = match[1];
    const elementAlias = match[2];
    aliasMap[elementAlias] = arrayAlias;
  }
  return aliasMap;
}

function generateIndividualResponseTypesContent(groupedResponses: GroupedResponses, openAPIContent: string): string {
  const lines: string[] = [];
  const sortedPaths = Object.keys(groupedResponses).sort();
  const spec = yaml.load(openAPIContent) as any;
  const schemaAliasMap = getSchemaAliasMap();
  const arrayAliasMap = getArrayAliasMap();
  const usedAliases = new Set<string>();
  const usedArrayAliases = new Set<string>();
  const importLines: string[] = [];

  // Create reverse mapping from pathName to actual path
  const pathNameToPathMap: Record<string, string> = {};
  // Create operationId mapping
  const operationIdMap: Record<string, string> = {};
  for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
    const pathName = generatePathName(pathKey);
    pathNameToPathMap[pathName] = pathKey;
    
    for (const method of Object.keys(pathObj as any)) {
      const op = (pathObj as any)[method];
      if (op && op.operationId) {
        operationIdMap[`${pathName}|${method.toUpperCase()}`] = op.operationId;
      }
    }
  }

  for (const pathName of sortedPaths) {
    const pathResponses = groupedResponses[pathName];
    
    // Sort methods alphabetically
    const sortedMethods = Object.keys(pathResponses).sort();
    
    for (const method of sortedMethods) {
      const methodResponses = pathResponses[method];
      // Generate the main response type for this method
      const responseTypeName = `${method}_${pathName}_Response`;
      const actualPath = pathNameToPathMap[pathName] || 'unknown';
      
      // Extract parameter descriptions from the OpenAPI spec
      let parameterDescriptions = '';
      let operationSummary = '';
      let operationDescription = '';
      const operationId = operationIdMap[`${pathName}|${method.toUpperCase()}`];
      if (operationId) {
        // Find the OpenAPI operation object
        let opObj: any = null;
        for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
          for (const m of Object.keys(pathObj as any)) {
            const op = (pathObj as any)[m];
            if (op && op.operationId === operationId) {
              opObj = op;
              break;
            }
          }
          if (opObj) break;
        }
        
        if (opObj) {
          // Extract operation summary and description
          operationSummary = opObj.summary || '';
          operationDescription = opObj.description || '';
          
          // Extract parameter descriptions
          if (opObj.parameters) {
            const paramDescs: string[] = [];
            for (const param of opObj.parameters) {
              if (param.description) {
                paramDescs.push(` * @param ${param.name} (${param.in}) - ${param.description}`);
              }
            }
            if (paramDescs.length > 0) {
              parameterDescriptions = '\n' + paramDescs.join('\n');
            }
          }
        }
      }
      
      // Generate @see tags for individual response types
      const seeTags = Object.keys(methodResponses).map(responseCode => {
        const individualTypeName = `${responseTypeName}_Response_${responseCode}`;
        return ` * @see {@link ${individualTypeName}} - ${responseCode} response type`;
      }).join('\n');
      
      lines.push(`/**
 * Response types for ${method.toUpperCase()} ${pathName} endpoint
 *${operationSummary ? `\n * ${operationSummary}` : ''}${operationDescription ? `\n * ${operationDescription}` : ''}
 *
 * @remarks
 * This type defines all possible response structures for the ${method.toUpperCase()} ${pathName} endpoint.
 * Each response code maps to a specific response type as defined in the OpenAPI specification.
 * Use this type to ensure type safety when handling API responses from this endpoint.
 *

 *
 * @path ${actualPath}${parameterDescriptions}
 *
${seeTags}
 *

 */`);
      // Sort response codes numerically
      const sortedCodes = Object.keys(methodResponses).sort((a, b) => parseInt(a) - parseInt(b));
      
      // Create union type of all possible response types
      const unionTypes = sortedCodes.map(responseCode => {
        const individualTypeName = `${responseTypeName}_Response_${responseCode}`;
        return individualTypeName;
      });
      
      lines.push(`export type ${responseTypeName} = ${unionTypes.join(' | ')};`);
      lines.push(``);
      
      // Generate individual response types for each status code
      for (const responseCode of sortedCodes) {
        let schemaRef = methodResponses[responseCode];
        let isArray = false;
        if (schemaRef.endsWith('[]')) {
          isArray = true;
          schemaRef = schemaRef.slice(0, -2);
        }
        const individualTypeName = `${responseTypeName}_Response_${responseCode}`;
        
        lines.push(`/**
 * ${responseCode} response for ${method.toUpperCase()} ${pathName} endpoint
 *
 * @remarks
 * This type defines the response structure for the ${responseCode} status code
 * of the ${method.toUpperCase()} ${pathName} endpoint.
 * It provides type safety for handling this specific response as defined in the OpenAPI specification.
 *

 *
 * @path ${actualPath}${parameterDescriptions}
 *
 * @see {@link ${responseTypeName}} - The main response type definition
 * @see {@link ${schemaAliasMap[schemaRef] || schemaRef}} - The actual schema type definition
 */`);
        if (isArray) {
          const tsAlias = schemaAliasMap[schemaRef] || schemaRef;
          if (arrayAliasMap[tsAlias]) {
            const arrayAliasName = arrayAliasMap[tsAlias];
            usedArrayAliases.add(arrayAliasName);
            lines.push(`export type ${individualTypeName} = ${arrayAliasName}`);
          } else if (schemaAliasMap[schemaRef]) {
            usedAliases.add(schemaAliasMap[schemaRef]);
            lines.push(`export type ${individualTypeName} = ${schemaAliasMap[schemaRef]}[]`);
          } else {
            lines.push(`export type ${individualTypeName} = unknown[]`);
          }
        } else {
          if (schemaAliasMap[schemaRef]) {
            usedAliases.add(schemaAliasMap[schemaRef]);
            lines.push(`export type ${individualTypeName} = ${schemaAliasMap[schemaRef]}`);
          } else {
            lines.push(`export type ${individualTypeName} = ${responseTypeName}["${responseCode}"]`);
          }
        }
        lines.push(``);
      }
    }
  }
  // Emit import for all used aliases
  if (usedAliases.size > 0) {
    lines.unshift(`import { ${Array.from(usedAliases).join(', ')} } from './schemas';\n`);
  }
  if (usedArrayAliases.size > 0) {
    lines.unshift(`import { ${Array.from(usedArrayAliases).join(', ')} } from './schemas-arrays';\n`);
  }
  return lines.join('\n');
}

function generateResponsesFile(groupedResponses: GroupedResponses, openAPIContent: string): string {
  const content = `/**
 * Response types for OpusDNS API endpoints
 *
 * This file contains TypeScript types for API response structures and status codes.
 * Each type is derived from the OpenAPI operation specification and provides type safety for API responses.
 * These types ensure that response handling matches the expected API contract.
 *
 * @remarks
 * - Response types follow the pattern: \`METHOD_EndpointName\` for grouped responses
 * - Individual response types follow: \`METHOD_EndpointName_Response_STATUSCODE\`
 * - All response types include comprehensive descriptions from the OpenAPI specification
 * - These types ensure type safety when handling API responses
 * - Response types cover all possible HTTP status codes for each endpoint
 *
 * @example
 * \`\`\`typescript
 * // Using response types for API handling
 * const response: GET_Domains_Response_200 = await api.getDomains();
 * const domains = response.results;
 * 
 * // Handling different status codes
 * if (response.status === 200) {
 *   const data: GET_Domains_Response_200 = response.data;
 * } else if (response.status === 422) {
 *   const error: GET_Domains_Response_422 = response.data;
 * }
 * \`\`\`
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */



${generateIndividualResponseTypesContent(groupedResponses, openAPIContent)}
`;
  return content;
}

function main() {
  try {
    const openAPIContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');

    // Extract response types
    const groupedResponses = extractResponseTypesFromOpenAPI(openAPIContent);

    const responsesOutputPath = path.join(
      process.cwd(),
      'src/helpers/responses.ts',
    );

    // Generate responses file
    const responsesContent = generateResponsesFile(groupedResponses, openAPIContent);
    fs.writeFileSync(responsesOutputPath, responsesContent);

    // Count total response types
    let totalCount = 0;
    let individualCount = 0;
    for (const pathName of Object.keys(groupedResponses)) {
      for (const method of Object.keys(groupedResponses[pathName])) {
        const methodResponses = groupedResponses[pathName][method];
        totalCount += Object.keys(methodResponses).length;
        individualCount += Object.keys(methodResponses).length; // One individual type per response code
      }
    }

    console.log(
      `✅ Generated ${Object.keys(groupedResponses).length} path groups with ${totalCount} total response types and ${individualCount} individual response types in ${responsesOutputPath}`,
    );

    return totalCount;
  } catch (error) {
    console.error('❌ Error generating response types:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateResponses };
