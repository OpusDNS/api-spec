import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";

const ast = await openapiTS(new URL("../src/openapi.json", import.meta.url));
const contents = astToString(ast);

fs.writeFileSync("./src/schema.d.ts", contents);
