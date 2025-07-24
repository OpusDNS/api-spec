#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface ParameterInfo {
  path: string;
  method: string;
  operationId: string;
  parameterName: string;
  parameterType: 'query' | 'path' | 'body';
  schemaRef?: string;
  required: boolean;
}

interface GroupedRequests {
  [pathKey: string]: {
    [method: string]: {
      query?: Record<string, string>;
      path?: Record<string, string>;
      body?: string;
    };
  };
}

function generatePathName(path: string): string {
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
      // Handle hyphens by converting to camelCase
      if (part.includes('-')) {
        return part.split('-').map((word, index) => {
          if (index === 0) {
            // First word starts with uppercase (PascalCase)
            return word.charAt(0).toUpperCase() + word.slice(1);
          } else {
            // Subsequent words start with uppercase (PascalCase)
            return word.charAt(0).toUpperCase() + word.slice(1);
          }
        }).join('');
      }
      return part.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
    });

  return pathParts.join('');
}

function generateRequestTypeName(path: string, method: string): string {
  const pathName = generatePathName(path);
  
  return `${method}_${pathName}_V1_Request`;
}

function extractRequestTypesFromOpenAPI(
  openAPIContent: string,
): GroupedRequests {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spec = yaml.load(openAPIContent) as any;

    if (!spec.paths) {
      throw new Error('No paths found in OpenAPI specification');
    }

    const groupedRequests: GroupedRequests = {};

    // Iterate through all paths
    for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const path = pathObj as any;

      // Check each HTTP method
      const methods = ['get', 'post', 'put', 'patch', 'delete'];

      for (const method of methods) {
        if (path[method]) {
          const operation = path[method];
          const pathName = generatePathName(pathKey);
          
          if (!groupedRequests[pathName]) {
            groupedRequests[pathName] = {};
          }
          
          if (!groupedRequests[pathName][method.toUpperCase()]) {
            groupedRequests[pathName][method.toUpperCase()] = {};
          }

          // Extract parameters from the operation
          if (operation.parameters) {
            for (const param of operation.parameters) {
              const paramType = param.in; // 'query', 'path', 'header', etc.
              
              if (paramType === 'query' || paramType === 'path') {
                if (!groupedRequests[pathName][method.toUpperCase()][paramType]) {
                  groupedRequests[pathName][method.toUpperCase()][paramType] = {};
                }
                
                let schemaRef = 'string'; // Default to string
                if (param.schema?.$ref) {
                  schemaRef = param.schema.$ref.replace('#/components/schemas/', '');
                } else if (param.schema?.type) {
                  schemaRef = param.schema.type;
                } else if (param.schema?.anyOf) {
                  // Handle anyOf schemas (like nullable types)
                  const anyOfSchema = param.schema.anyOf.find((s: any) => s.$ref);
                  if (anyOfSchema?.$ref) {
                    schemaRef = anyOfSchema.$ref.replace('#/components/schemas/', '');
                  } else {
                    schemaRef = param.schema.type || 'string';
                  }
                }
                
                groupedRequests[pathName][method.toUpperCase()][paramType][param.name] = schemaRef;
              }
            }
          }

          // Extract request body from the operation
          if (operation.requestBody?.content?.['application/json']?.schema) {
            const bodySchema = operation.requestBody.content['application/json'].schema;
            let bodyRef = 'object'; // Default
            
            if (bodySchema.$ref) {
              bodyRef = bodySchema.$ref.replace('#/components/schemas/', '');
            }
            
            groupedRequests[pathName][method.toUpperCase()].body = bodyRef;
          }
        }
      }
    }

    return groupedRequests;
  } catch (error) {
    console.error('Error parsing OpenAPI YAML:', error);
    throw error;
  }
}

function generateGroupedRequestTypesContent(groupedRequests: GroupedRequests): string {
  let content = '\n/**\n * Grouped request types by endpoint\n */\n\n';

  for (const [pathKey, methods] of Object.entries(groupedRequests)) {
    const typeName = pathKey.replace(/_/g, '');
    content += `/**\n * Request types for ${pathKey.replace(/_/g, ' ')}\n */\n`;
    content += `export type ${typeName}_V1_Requests = {\n`;

    for (const [method, requestTypes] of Object.entries(methods)) {
      content += `  ${method}: {\n`;
      
      if (requestTypes.query) {
        content += `    query: {\n`;
        for (const [paramName, schemaRef] of Object.entries(requestTypes.query)) {
          content += `      ${paramName}: components["schemas"]["${schemaRef}"]\n`;
        }
        content += `    }\n`;
      }
      
      if (requestTypes.path) {
        content += `    path: {\n`;
        for (const [paramName, schemaRef] of Object.entries(requestTypes.path)) {
          content += `      ${paramName}: components["schemas"]["${schemaRef}"]\n`;
        }
        content += `    }\n`;
      }
      
      if (requestTypes.body) {
        content += `    body: components["schemas"]["${requestTypes.body}"]\n`;
      }
      
      content += `  }\n`;
    }

    content += `}\n\n`;
  }

  return content;
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

function generateIndividualRequestTypesContent(groupedRequests: GroupedRequests, operationIdMap: Record<string, string>, openAPIContent: string): string {
  const lines: string[] = [];
  const sortedPaths = Object.keys(groupedRequests).sort();
  const spec = yaml.load(openAPIContent) as any;
  const schemaAliasMap = getSchemaAliasMap();
  const arrayAliasMap = getArrayAliasMap();
  const usedAliases = new Set<string>();
  const usedArrayAliases = new Set<string>();
  const emittedTypes = new Set<string>();
  
  // Create reverse mapping from pathName to actual path
  const pathNameToPathMap: Record<string, string> = {};
  for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
    const pathName = generatePathName(pathKey);
    pathNameToPathMap[pathName] = pathKey;
  }
  
  for (const pathName of sortedPaths) {
    const pathRequests = groupedRequests[pathName];
    const sortedMethods = Object.keys(pathRequests).sort();
    for (const method of sortedMethods) {
      const methodRequests = pathRequests[method];
      const typeBase = generateRequestTypeName(pathName, method);
      const operationId = operationIdMap[`${pathName}|${method.toUpperCase()}`];
      const actualPath = pathNameToPathMap[pathName] || 'unknown';
      
      // Extract parameter descriptions from the OpenAPI spec
      let parameterDescriptions = '';
      let paramDescMap: Record<string, { in: string; desc: string }> = {};
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
        if (opObj && opObj.parameters) {
          const paramDescs: string[] = [];
          for (const param of opObj.parameters) {
            if (param.description) {
              paramDescs.push(` * @param ${param.name} (${param.in}) - ${param.description}`);
              paramDescMap[`${param.in}:${param.name}`] = { in: param.in, desc: param.description };
            }
          }
          if (paramDescs.length > 0) {
            parameterDescriptions = '\n' + paramDescs.join('\n');
          }
        }
      }
      // Parent type TSDoc
      lines.push(`/**\n * Request type for ${method} ${pathName} endpoint\n * \n * @path ${actualPath}${parameterDescriptions}\n */`);
      // Build parameters object
      const paramKeys: string[] = [];
      const paramTypes: string[] = [];
      if (methodRequests.query) paramTypes.push('query');
      if (methodRequests.path) paramTypes.push('path');
      // Remove header and cookie, as they are not present in GroupedRequests
      if (paramTypes.length > 0) {
        lines.push(`export type ${typeBase} = {`);
        lines.push(`  parameters: {`);
        for (const paramType of paramTypes) {
          let paramSchema = methodRequests[paramType];
          if (typeof paramSchema === 'string' && schemaAliasMap[paramSchema]) {
            usedAliases.add(schemaAliasMap[paramSchema]);
            lines.push(`    ${paramType}: ${schemaAliasMap[paramSchema]};`);
          } else {
            lines.push(`    ${paramType}: operations['${operationId}']['parameters']['${paramType}'];`);
          }
        }
        lines.push(`  };`);
      } else {
        lines.push(`export type ${typeBase} = {`);
      }
      // Build requestBody type (actual schema if possible)
      let requestBodyType = '';
      // Find the OpenAPI operation object for this method/path
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
      if (opObj && opObj.requestBody && opObj.requestBody.content && opObj.requestBody.content['application/json'] && opObj.requestBody.content['application/json'].schema) {
        const schema = opObj.requestBody.content['application/json'].schema;
        if (schema.type === 'array' && schema.items && schema.items.$ref) {
          const itemRef = schema.items.$ref.replace('#/components/schemas/', '');
          const tsAlias = schemaAliasMap[itemRef] || itemRef;
          if (arrayAliasMap[tsAlias]) {
            const arrayAliasName = arrayAliasMap[tsAlias];
            usedArrayAliases.add(arrayAliasName);
            requestBodyType = arrayAliasName;
          } else if (schemaAliasMap[itemRef]) {
            usedAliases.add(schemaAliasMap[itemRef]);
            requestBodyType = schemaAliasMap[itemRef] + '[]';
          } else {
            requestBodyType = 'unknown[]';
          }
        } else if (schema.$ref) {
          const ref = schema.$ref.replace('#/components/schemas/', '');
          if (schemaAliasMap[ref]) {
            usedAliases.add(schemaAliasMap[ref]);
            requestBodyType = schemaAliasMap[ref];
          } else {
            requestBodyType = 'unknown';
          }
        } else if (schema.type === 'object' || !schema) {
          requestBodyType = 'Record<string, unknown>';
        } else {
          requestBodyType = 'unknown';
        }
        lines.push(`  requestBody: ${requestBodyType};`);
      }
      lines.push(`}`);
      // Emit individual parameter/body types with unique, context-aware TSDoc comments
      if (paramTypes.length > 0) {
        for (const paramType of paramTypes) {
          const typeName = `${typeBase}_Parameters_${paramType.charAt(0).toUpperCase() + paramType.slice(1)}`;
          if (!emittedTypes.has(typeName)) {
            // Compose TSDoc
            let paramDoc = `/**\n * ${paramType.charAt(0).toUpperCase() + paramType.slice(1)} parameters for ${method.toUpperCase()} ${actualPath}\n * @path ${actualPath}`;
            // Add @param descriptions for this paramType
            if (methodRequests[paramType] && typeof methodRequests[paramType] === 'object') {
              for (const paramName of Object.keys(methodRequests[paramType])) {
                const desc = paramDescMap[`${paramType}:${paramName}`]?.desc;
                if (desc) {
                  paramDoc += `\n * @param ${paramName} (${paramType}) - ${desc}`;
                }
              }
            }
            paramDoc += '\n */';
            lines.push(paramDoc);
            lines.push(`export type ${typeName} = ${typeBase}['parameters']['${paramType}'];`);
            emittedTypes.add(typeName);
          }
        }
      }
      if (requestBodyType) {
        const typeName = `${typeBase}_RequestBody`;
        if (!emittedTypes.has(typeName)) {
          let paramDoc = `/**\n * Request body for ${method.toUpperCase()} ${actualPath}\n * @path ${actualPath}`;
          paramDoc += '\n */';
          lines.push(paramDoc);
          lines.push(`export type ${typeName} = ${typeBase}['requestBody'];`);
          emittedTypes.add(typeName);
        }
      }
      lines.push('');
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

function extractOperationIdMap(openAPIContent: string): Record<string, string> {
  // Map of pathName|METHOD to operationId
  const map: Record<string, string> = {};
  const spec = yaml.load(openAPIContent) as any;
  for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
    const pathName = generatePathName(pathKey);
    for (const method of Object.keys(pathObj as any)) {
      const op = (pathObj as any)[method];
      if (op && op.operationId) {
        map[`${pathName}|${method.toUpperCase()}`] = op.operationId;
      }
    }
  }
  return map;
}

function generateRequestsFile(groupedRequests: GroupedRequests, operationIdMap: Record<string, string>, openAPIContent: string): string {
  const content = `/**
 * Request parameter types for OpusDNS API endpoints.
 *
 * Each type is derived from the OpenAPI operation and includes endpoint, summary, and parameter descriptions for better developer understanding.
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { operations, components } from '../schema';

${generateIndividualRequestTypesContent(groupedRequests, operationIdMap, openAPIContent)}
`;
  return content;
}

function main() {
  try {
    const openAPIContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');
    const groupedRequests = extractRequestTypesFromOpenAPI(openAPIContent);
    const operationIdMap = extractOperationIdMap(openAPIContent);
    const requestsOutputPath = path.join(
      process.cwd(),
      'src/helpers/requests.ts',
    );
    // Generate requests file
    const requestsContent = generateRequestsFile(groupedRequests, operationIdMap, openAPIContent);
    fs.writeFileSync(requestsOutputPath, requestsContent);
    console.log(
      `✅ Generated request parameter types in ${requestsOutputPath}`
    );
    return Object.keys(groupedRequests).length;
  } catch (error) {
    console.error('❌ Error generating request parameter types:', error);
    process.exit(1);
  }
}

export { main as generateRequests };
