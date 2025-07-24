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
  const regex = /export type (\w+) = components\['schemas'\]\['([^']+)'\];/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const alias = match[1];
    const schema = match[2];
    aliasMap[schema] = alias;
  }
  return aliasMap;
}

function generateIndividualRequestTypesContent(groupedRequests: GroupedRequests, operationIdMap: Record<string, string>, openAPIContent: string): string {
  const lines: string[] = [];
  const sortedPaths = Object.keys(groupedRequests).sort();
  const spec = yaml.load(openAPIContent) as any;
  const schemaAliasMap = getSchemaAliasMap();
  const usedAliases = new Set<string>();
  
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
            }
          }
          if (paramDescs.length > 0) {
            parameterDescriptions = '\n' + paramDescs.join('\n');
          }
        }
      }
      
      lines.push(`/**
 * Request type for ${method} ${pathName} endpoint
 * 
 * @path ${actualPath}${parameterDescriptions}
 */`);
      if (operationId) {
        // Find the OpenAPI operation object
        let opObj: any = null;
        for (const [pathKey, pathObj] of Object.entries(spec.paths)) {
          for (const m of Object.keys(pathObj as any)) {
            const op = (pathObj as any)[m];
            if (op && op.operationId === operationId) {
              opObj = op;
            }
          }
        }
        // Build parameters object
        const paramKeys: string[] = [];
        if (opObj && opObj.parameters) {
          const paramTypes = ['query', 'header', 'path', 'cookie'];
          for (const paramType of paramTypes) {
            if (opObj.parameters.some((p: any) => p.in === paramType)) {
              // If the parameter type is a schema, use the alias if available
              const paramSchema = opObj.parameters.find((p: any) => p.in === paramType && p.schema && p.schema.$ref);
              if (paramSchema && paramSchema.schema && paramSchema.schema.$ref) {
                const schemaName = paramSchema.schema.$ref.replace('#/components/schemas/', '');
                if (schemaAliasMap[schemaName]) {
                  usedAliases.add(schemaAliasMap[schemaName]);
                  paramKeys.push(`    ${paramType}: ${schemaAliasMap[schemaName]};`);
                  continue;
                }
              }
              paramKeys.push(`    ${paramType}: operations['${operationId}']['parameters']['${paramType}'];`);
            }
          }
        }
        // Build requestBody type (actual schema if possible)
        let requestBodyType = '';
        if (opObj && opObj.requestBody && opObj.requestBody.content && opObj.requestBody.content['application/json'] && opObj.requestBody.content['application/json'].schema) {
          const schema = opObj.requestBody.content['application/json'].schema;
          if (schema.$ref) {
            const schemaRef = schema.$ref.replace('#/components/schemas/', '');
            if (schemaAliasMap[schemaRef]) {
              usedAliases.add(schemaAliasMap[schemaRef]);
              requestBodyType = schemaAliasMap[schemaRef];
            } else {
              requestBodyType = `components["schemas"]["${schemaRef}"]`;
            }
          } else {
            requestBodyType = 'unknown';
          }
        }
        // Main type
        lines.push(`export type ${typeBase} = {`);
        if (paramKeys.length > 0) {
          lines.push(`  parameters: {`);
          lines.push(paramKeys.join('\n'));
          lines.push(`  };`);
        }
        if (requestBodyType) {
          lines.push(`  requestBody: ${requestBodyType};`);
        }
        lines.push(`}`);
        // Convenience types
        if (paramKeys.length > 0) {
          lines.push(`
export type ${typeBase}_Parameters = ${typeBase}['parameters'];`);
          if (paramKeys.some(k => k.includes('query'))) {
            lines.push(`export type ${typeBase}_Parameters_Query = ${typeBase}['parameters']['query'];`);
          }
          if (paramKeys.some(k => k.includes('path'))) {
            lines.push(`export type ${typeBase}_Parameters_Path = ${typeBase}['parameters']['path'];`);
          }
          if (paramKeys.some(k => k.includes('header'))) {
            lines.push(`export type ${typeBase}_Parameters_Header = ${typeBase}['parameters']['header'];`);
          }
          if (paramKeys.some(k => k.includes('cookie'))) {
            lines.push(`export type ${typeBase}_Parameters_Cookie = ${typeBase}['parameters']['cookie'];`);
          }
        }
        if (requestBodyType) {
          lines.push(`export type ${typeBase}_RequestBody = ${typeBase}['requestBody'];`);
        }
      } else {
        lines.push(`export type ${typeBase} = {};`);
      }
      lines.push('');
    }
  }
  // Emit import for all used aliases
  if (usedAliases.size > 0) {
    lines.unshift(`import { ${Array.from(usedAliases).join(', ')} } from './schemas';\n`);
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
      `✅ Generated request parameter types in ${requestsOutputPath}`,
    );
    return Object.keys(groupedRequests).length;
  } catch (error) {
    console.error('❌ Error generating request parameter types:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateRequests };
