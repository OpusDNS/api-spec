#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { generateParamTypes } from './generate-param-types';
import { generateResponseDataTypes } from './generate-response-data-types';
import { generateResponseTypes } from './generate-response-types';

function createBaseTypesFile(typesFilePath: string): void {
  const baseContent = `/**
 * Type definitions for OpusDNS API response objects and parameters.
 *
 * This file is auto-generated from the OpenAPI specification.
 * Do not edit manually.
 */

import { components, operations } from '../schema';

`;

  fs.writeFileSync(typesFilePath, baseContent);
  console.log('   Created base types file with imports');
}

async function main(): Promise<{
  responseTypesCount: number;
  paramCount: number;
  responseDataTypesCount: number;
}> {
  console.log('📝 Generating OpusDNS API types...\n');

  try {
    const typesFilePath = path.join(
      process.cwd(),
      'src/helpers/types.ts',
    );

    // Step 0: Create base types file with imports
    console.log('📝 Creating base types file...');
    createBaseTypesFile(typesFilePath);

    // Step 1: Generate response data types
    console.log('📝 Generating response types...');
    const responseTypesCount = generateResponseTypes();
    console.log(
      `   Generated ${responseTypesCount} response data type definitions\n`,
    );

    // Step 2: Generate parameter types
    console.log('🔧 Generating parameter types...');
    const paramCount = generateParamTypes();
    console.log(`   Generated ${paramCount} parameter type definitions\n`);

    // Step 3: Generate response types
    console.log('📝 Generating response data types...');
    const responseDataTypesCount = generateResponseDataTypes();
    console.log(
      `   Generated ${responseDataTypesCount} response type definitions\n`,
    );

    console.log('✅ All OpusDNS API types generated successfully!');
    console.log('\nGenerated file:');
    console.log('   📄 src/helpers/types.ts');

    return {
      responseTypesCount,
      paramCount,
      responseDataTypesCount,
    };
  } catch (error) {
    console.error('❌ Error generating types:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateTypes };
