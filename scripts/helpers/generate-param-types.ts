#!/usr/bin/env tsx

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { OPEN_API_SCHEMA_PATH } from '../constants';

interface ParameterInfo {
  operationName: string;
  operationId: string;
  apiPath: string;
  httpMethod: string;
  parameters: {
    query?: boolean;
    path?: boolean;
    header?: boolean;
  };
}

function generateParameterTypeName(operationId: string): string {
  return generateCleanParameterTypeName(operationId);
}

function extractParameterTypesFromOpenAPI(
  openAPIContent: string,
): ParameterInfo[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spec = yaml.load(openAPIContent) as any;

    if (!spec.paths) {
      throw new Error('No paths found in OpenAPI specification');
    }

    const parameters: ParameterInfo[] = [];

    // Iterate through all paths
    for (const [apiPath, pathObj] of Object.entries(spec.paths)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const path = pathObj as any;

      // Check each HTTP method
      for (const method of [
        'get',
        'post',
        'put',
        'patch',
        'delete',
        'head',
        'options',
      ] as const) {
        const operation = path[method];
        if (!operation) continue;

        const operationId = operation.operationId;
        if (!operationId) continue;

        // Extract parameter types
        if (operation.parameters && Array.isArray(operation.parameters)) {
          const paramInfo: ParameterInfo = {
            operationName: operationId,
            operationId,
            apiPath,
            httpMethod: method,
            parameters: {},
          };

          for (const param of operation.parameters) {
            const paramType = param.in; // 'query', 'path', 'header', etc.
            if (paramType) {
              paramInfo.parameters[
                paramType as keyof typeof paramInfo.parameters
              ] = true;
            }
          }

          // Only add if there are actual parameters
          if (Object.keys(paramInfo.parameters).length > 0) {
            parameters.push(paramInfo);
          }
        }
      }
    }

    return parameters;
  } catch (error) {
    console.error('Error parsing OpenAPI content:', error);
    throw error;
  }
}

function generateCleanParameterTypeName(operationId: string): string {
  // Match up to and including the version (e.g., v1, v2, etc.)
  const match = operationId.match(/^(.*?_v\d+)/);
  const base = match ? match[1] : operationId;

  // Convert to PascalCase
  const pascal = base
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  return `${pascal}Params`;
}

function generateParameterTypeContent(
  paramInfo: ParameterInfo,
  usedNames: Set<string>,
): string {
  let content = '';
  for (const paramType of Object.keys(paramInfo.parameters)) {
    const typeName = generateUniqueFullTypeName(
      paramInfo.operationId,
      paramType,
      usedNames,
      paramInfo.apiPath,
      paramInfo.httpMethod,
    );
    content += `export type ${typeName} = operations['${paramInfo.operationId}']['parameters']['${paramType}'];\n`;
  }
  return content;
}

function generatePathBasedTypeName(
  apiPath: string,
  httpMethod: string,
  paramType: string,
): string {
  // Start with the API path
  let name = apiPath.replace(/^\//, '');

  // Extract version (v1, v2, etc.) and remove it from the path
  const versionMatch = name.match(/^(v\d+)\//);
  const version = versionMatch ? versionMatch[1] : '';
  if (version) {
    name = name.replace(/^v\d+\//, '');
  }

  // Convert path parameters {param} to ByParam
  name = name.replace(
    /\{([\w_]+)\}/g,
    (_m, param) => `By${param.charAt(0).toUpperCase() + param.slice(1)}`,
  );

  // Convert slashes and hyphens to underscores, then to PascalCase
  name = name.replace(/[/-]/g, '_');
  name = name.replace(/__+/g, '_');
  name = name.replace(/_+$/, '');

  // Convert to PascalCase
  const pascalName = name
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  // Add HTTP method with underscore, then path name, then parameter type, then version with underscore
  const httpMethodPascal =
    httpMethod.charAt(0).toUpperCase() + httpMethod.slice(1).toLowerCase();
  const paramTypePascal =
    paramType.charAt(0).toUpperCase() + paramType.slice(1);

  const versionSuffix = version ? `_${version.toUpperCase()}` : '';

  return `${httpMethodPascal}_${pascalName}_Params${paramTypePascal}${versionSuffix}`;
}

function generateUniqueFullTypeName(
  operationId: string,
  paramType: string,
  usedNames: Set<string>,
  apiPath?: string,
  httpMethod?: string,
): string {
  // If we have path and method info, use path-based naming
  if (apiPath && httpMethod) {
    const pathBasedName = generatePathBasedTypeName(
      apiPath,
      httpMethod,
      paramType,
    );

    // If unique, use it
    if (!usedNames.has(pathBasedName)) {
      usedNames.add(pathBasedName);
      return pathBasedName;
    }
  }

  // Fallback to operationId-based naming
  const parts = operationId.split('_');
  const paramTypeSuffix =
    paramType.charAt(0).toUpperCase() + paramType.slice(1);

  // Start with the full operationId converted to PascalCase
  const fullName =
    parts.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('') +
    `Params${paramTypeSuffix}`;

  // If unique, use it
  if (!usedNames.has(fullName)) {
    usedNames.add(fullName);
    return fullName;
  }

  // If not unique, add a counter
  let counter = 1;
  let uniqueName = fullName;
  while (usedNames.has(uniqueName)) {
    uniqueName = `${fullName}${counter}`;
    counter++;
  }
  usedNames.add(uniqueName);
  return uniqueName;
}

function appendParameterTypesToFile(
  parameters: ParameterInfo[],
  typesFilePath: string,
): void {
  // Read existing content
  const existingContent = fs.readFileSync(typesFilePath, 'utf-8');

  // Generate parameter types content
  let paramTypesContent = `\n/** \n * Request Parameter Types\n*/\n`;
  const usedNames = new Set<string>();

  for (const paramInfo of parameters) {
    paramTypesContent += generateParameterTypeContent(paramInfo, usedNames);
  }

  // Append to the end of the file
  const newContent = existingContent + paramTypesContent;
  fs.writeFileSync(typesFilePath, newContent);
}

function main() {
  try {
    const openapiContent = fs.readFileSync(OPEN_API_SCHEMA_PATH, 'utf-8');
    const typesFilePath = path.join(
      process.cwd(),
      'src/types/types.ts',
    );

    console.log('Extracting parameter types from OpenAPI spec...');
    const parameters = extractParameterTypesFromOpenAPI(openapiContent);

    console.log(`Found ${parameters.length} operations with parameters:`);
    parameters.forEach((paramInfo) => {
      const typeName = generateParameterTypeName(paramInfo.operationId);
      console.log(`  - ${typeName} (from ${paramInfo.operationId})`);
    });

    if (parameters.length === 0) {
      console.log('No operations with parameters found in OpenAPI spec');
      return 0;
    }

    console.log('Appending parameter types to types file...');
    appendParameterTypesToFile(parameters, typesFilePath);

    console.log(
      `✅ Generated ${parameters.length} parameter types and appended to ${typesFilePath}`,
    );

    return parameters.length;
  } catch (error) {
    console.error('❌ Error generating parameter types:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateParamTypes };
