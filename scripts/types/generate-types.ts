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
 * Do not edit manually. To regenerate, run:
 *   npx tsx scripts/opus-apis/generate-all.ts
 *
 * Generated from: node_modules/opusdns-api-types/src/openapi.yaml
 */

import { components, operations } from 'opusdns-api-types';

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
      'src/types/opus-api/types.ts',
    );

    // Step 0: Create base types file with imports
    console.log('📝 Step 0: Creating base types file...');
    createBaseTypesFile(typesFilePath);

    // Step 1: Generate response data types
    console.log('📝 Step 1: Generating response types...');
    const responseTypesCount = await generateResponseTypes();
    console.log(
      `   Generated ${responseTypesCount} response data type definitions\n`,
    );

    // Step 2: Generate parameter types
    console.log('🔧 Step 2: Generating parameter types...');
    const paramCount = await generateParamTypes();
    console.log(`   Generated ${paramCount} parameter type definitions\n`);

    // Step 3: Generate response types
    console.log('📝 Step 3: Generating response data types...');
    const responseDataTypesCount = await generateResponseDataTypes();
    console.log(
      `   Generated ${responseDataTypesCount} response type definitions\n`,
    );

    console.log('✅ All OpusDNS API types generated successfully!');
    console.log('\nGenerated file:');
    console.log('   📄 src/types/opus-api/types.ts');

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
