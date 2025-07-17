#!/usr/bin/env tsx

import { generateConstants } from './generate-constants';
import { generateIndex } from './generate-index';
import { generateKeys } from './generate-keys';
import { generateTypes } from './generate-types';

async function main() {
  console.log('🚀 Starting OpusDNS API code generation...\n');

  try {
    // Step 1: Generate types
    console.log('📝 Step 1: Generating API types...');
    const { responseDataTypesCount, paramCount, responseTypesCount } =
      await generateTypes();
    console.log(
      `   Generated ${responseDataTypesCount} response data type definitions, ${paramCount} parameter type definitions, and ${responseTypesCount} response type definitions\n`,
    );

    // // Step 2: Generate API paths
    // console.log('🛣️  Step 2: Generating API path constants...');
    // const pathCount = await generatePaths();
    // console.log(`   Generated ${pathCount} API paths\n`);

    // Step 2: Generate API keys
    console.log('🔑 Step 3: Generating API data keys...');
    const keysCount = await generateKeys();
    console.log(`   Generated ${keysCount} API key constants\n`);

    // Step 3: Generate enums/constants
    console.log('📊 Step 4: Generating constants...');
    const constantsCount = generateConstants();
    console.log(`   Generated ${constantsCount} enums/constants\n`);

    // Step 4: Generate index file
    console.log('📋 Step 5: Generating index file...');
    await generateIndex();
    console.log('   Generated index file with all exports\n');

    console.log('✅ All OpusDNS API code generation completed successfully!');
  } catch (error) {
    console.error('❌ Error during code generation:', error);
    process.exit(1);
  }
}

// Run the script
await main();
