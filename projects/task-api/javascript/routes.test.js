import {readFileSync} from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";
import {handleRequest} from "./routes.js";
const cases = JSON.parse(readFileSync(new URL("../cases.json", import.meta.url), "utf8"));
for (const [i, item] of cases.entries()) test(`route case ${i + 1}: ${item.args[0]} ${item.args[1]}`, () => { const args = structuredClone(item.args); assert.deepEqual(handleRequest(...args), item.expected); assert.deepEqual(args, item.args); });
