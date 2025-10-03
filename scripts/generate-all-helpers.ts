import { generateAllHelpers } from '@opusdns/api-spec-ts-generator';
import path from 'path';

const OPEN_API_SCHEMA_PATH = path.join(
  process.cwd(),
  'src/openapi.yaml',
);
generateAllHelpers(OPEN_API_SCHEMA_PATH);
