#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';

function generateIndexFile(): string {
  const lines = [
    '/**',
    ' * Index file for OpusDNS API types and constants.',
    ' *',
    ' * This file is auto-generated from the OpenAPI specification.',
    ' * Do not edit manually.',
    ' */',
    '',
    "export * from './constants';",
    "export * from './keys';",
    "export * from './paths';",
    "export * from './types';",
    '',
  ];

  return lines.join('\n');
}

function main() {
  try {
    // Generate index file
    const indexContent = generateIndexFile();
    const indexOutputPath = path.join(
      process.cwd(),
      'src/types/index.ts',
    );
    fs.writeFileSync(indexOutputPath, indexContent);

    console.log(`✅ Generated index file in ${indexOutputPath}`);

    return true;
  } catch (error) {
    console.error('❌ Error generating index file:', error);
    process.exit(1);
  }
}

// Run the script if it's the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateIndex };
