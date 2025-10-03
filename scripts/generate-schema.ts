import fs from "node:fs";
import { generateSchema } from '@opusdns/api-spec-ts-generator';


const schemaPath = new URL("../src/openapi.yaml", import.meta.url)
const contents = await generateSchema(schemaPath);
fs.writeFileSync("./src/schema.d.ts", contents);
