import fs from "node:fs";
import ts from "typescript";
import openapiTS, { astToString } from "openapi-typescript";

const DATE = ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Date"));
const NULL = ts.factory.createLiteralTypeNode(ts.factory.createNull());

const schemaPath = new URL("../src/openapi.json", import.meta.url)
const ast = await openapiTS(schemaPath, {
	transform(schemaObject, metadata) {
		if (schemaObject.format === "date-time") {
			return schemaObject.nullable
				? ts.factory.createUnionTypeNode([DATE, NULL])
				: DATE;
		}
	},
});
const contents = astToString(ast);

fs.writeFileSync("./src/schema.d.ts", contents);
