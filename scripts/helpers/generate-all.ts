#!/usr/bin/env tsx

import { generateEnums } from './generate-enums';
import { generateIndex } from './generate-index';
import { generateResponses } from './generate-responses';
import { generateRequests } from './generate-requests';
import { generateSchemas } from './generate-schemas';

async function main() {
  console.log('🚀 Starting OpusDNS API code generation...\n');

  try {
    // Step 1: Generate direct schema aliases
    console.log('📦 Step 1: Generating direct schema aliases...');
    const schemaCount = generateSchemas();
    console.log(`   Generated ${schemaCount} direct schema aliases\n`);

    // Step 2: Generate response types
    console.log('📝 Step 2: Generating API responses...');
    const responseTypeCount = await generateResponses();
    console.log(`   Generated ${responseTypeCount} response types\n`);

    // Step 3: Generate request types
    console.log('📤 Step 3: Generating API requests...');
    const requestTypeCount = await generateRequests();
    console.log(`   Generated ${requestTypeCount} request types\n`);

    // Step 4: Generate enums
    console.log('📊 Step 4: Generating enums...');
    const constantsCount = generateEnums();
    console.log(`   Generated ${constantsCount} enums\n`);

    // Step 5: Generate index file
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
