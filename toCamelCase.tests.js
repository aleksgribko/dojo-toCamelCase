var assert = require("assert");
var toCamelCase = require("./toCamelCase.js");

describe("To Camel Case", function () {
  it("Should be loaded", function () {
    console.log(toCamelCase);
    assert.strictEqual(typeof toCamelCase, "function");
  });

  it("Should return a string", function () {
    assert.strictEqual(typeof toCamelCase("hello"), "string");
  });

  it("Should return 'camelCase' from 'camel case'", function () {
    assert.strictEqual(toCamelCase("camel case"), "camelCase");
  });

  it("Should return 'camel_Case' from 'camel-case'", function () {
    assert.strictEqual(toCamelCase("camel-case"), "camel_Case");
  });

  it("Should return 'camelCase' from '   camel case   '", function () {
    assert.strictEqual(toCamelCase("   camel case   "), "camelCase");
  });

  it("Should return 'camelCase' from 'CAMEL CASE'", function () {
    assert.strictEqual(toCamelCase("CAMEL CASE"), "camelCase");
  });

  it("Should return 'camelCaseIsCool' from 'camel case is cool'", function () {
    assert.strictEqual(toCamelCase("camel case is cool"), "camelCaseIsCool");
  });

  it("Should return 'camelCase_Is_Cool' from 'camel case-is-cool'", function () {
    assert.strictEqual(toCamelCase("camel case-is-cool"), "camelCase_Is_Cool");
  });
});
