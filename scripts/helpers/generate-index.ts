#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';

function generateIndexFile(): string {
  const lines = [
    '/**',
    ' * OpusDNS API Type Index',
    ' *',    ' *',
    ' * - keys: Key constants for API response objects',
    ' * - requests: Request parameter types for all endpoints',
    ' * - schemas: Direct type aliases for OpenAPI schemas',
    ' * - schemas-arrays: Array type aliases for OpenAPI schemas that are arrays' ,
    ' * - enums: All enums used in the API',
    ' *',
    ' * This file is auto-generated from the OpenAPI specification.',
    ' * Do not edit manually.',
    ' */',
    '',
    "export * from './keys';",
    "export * from './requests';",
    "export * from './schemas.d';",
    "export * from './schemas-arrays.d';",
    "export * from './constants.d';",
    "export * from './responses.d';",
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
      'src/helpers/index.ts',
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
