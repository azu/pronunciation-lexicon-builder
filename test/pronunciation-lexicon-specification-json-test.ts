// MIT © 2017 azu
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
import { jsonToPLSJSON, jsonToPLSXML } from "../src/pronunciation-lexicon-specification-json";

describe("pronunciation-lexicon-specification-json", () => {
    describe("toXML", () => {
        const fixturesDir = path.join(__dirname, "json-to-PLSXML");
        fs.readdirSync(fixturesDir).map(caseName => {
            it(`should convert for ${caseName.replace(/-/g, " ")}`, () => {
                const fixtureDir = path.join(fixturesDir, caseName);
                const actualPath = path.join(fixtureDir, "input.json");
                const actual = jsonToPLSXML(require(actualPath));
                const expected = fs.readFileSync(path.join(fixtureDir, "output.xml"), "utf-8");
                assert.strictEqual(actual, expected, JSON.stringify(actual) + "\n");
            });
        });
    });
    describe("toJSON", () => {
        const fixturesDir = path.join(__dirname, "json-to-PLSJSON");
        fs.readdirSync(fixturesDir).map(caseName => {
            it(`should convert for ${caseName.replace(/-/g, " ")}`, () => {
                const fixtureDir = path.join(fixturesDir, caseName);
                const actualPath = path.join(fixtureDir, "input.json");
                const actual = jsonToPLSJSON(require(actualPath));
                const expected = require(path.join(fixtureDir, "output.json"));
                assert.deepStrictEqual(actual, expected, JSON.stringify(actual) + "\n");
            });
        });
    });
});
