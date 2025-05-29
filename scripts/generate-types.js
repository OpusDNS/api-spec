import fs from "node:fs";
import ts from "typescript";
import openapiTS, { astToString } from "openapi-typescript";

const DATE = ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Date"));
const NULL = ts.factory.createLiteralTypeNode(ts.factory.createNull());

function getTypeIdPrefix(schemaObject) {
	if (! "format" in schemaObject) {
		return null;
	}
	if (! "x-typeid-prefix" in schemaObject) {
		return null;
	}

	return schemaObject["x-typeid-prefix"];
}

const schemaPath = new URL("../src/openapi.json", import.meta.url)
const ast = await openapiTS(schemaPath, {
	transform(schemaObject, metadata) {
		switch (schemaObject.format) {
			case "date-time":
				return schemaObject.nullable
					? ts.factory.createUnionTypeNode([DATE, NULL])
					: DATE;

			case "typeid":
				const typeIdPrefix = getTypeIdPrefix(schemaObject);
				if (!typeIdPrefix) {
					return null;
				}

				const typeIdType = ts.factory.createTypeReferenceNode(
					ts.factory.createIdentifier("TypeID"),
					[
						ts.factory.createLiteralTypeNode(
							ts.factory.createStringLiteral(typeIdPrefix)
						)
					]
				);
				return typeIdType;

			default:
				return null;
		}
	},
	inject: "import { TypeID } from 'typeid-js';",
});
const contents = astToString(ast);

fs.writeFileSync("./src/schema.d.ts", contents);
