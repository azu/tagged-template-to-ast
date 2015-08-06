// LICENSE : MIT
"use strict";
import assert from "power-assert"
import toAST from "../src/toAST"
import {parse} from "esprima"
import astEqual from "ast-equal"
describe("#toAST", function () {
    it("should return AST Node", function () {
        var nodeForInline = parse(1);
        var astNode = toAST`var a = ${nodeForInline}`;
        assert(typeof astNode === "object");
        assert(astNode.type === "Program");
    });
    it("should return ast that inlined parameter node", function () {
        var nodeForInline = parse('"string"');
        var astNode = toAST`var a = ${nodeForInline}`;
        var expected = `var a = "string"`;
        astEqual(astNode, expected);
    });
    it("support `${var} code`", function () {
        var nodeForInline = parse('"string"');
        var astNode = toAST`${nodeForInline}; var a;`;
        var expected = `"string";var a;`;
        astEqual(astNode, expected);
    });
    it("support function expression", function () {
        var nodeForInline = {
            "type": "FunctionExpression",
            "id": null,
            "params": [],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": []
            },
            "generator": false,
            "expression": false
        };
        var astNode = toAST`var a = ${nodeForInline};`;
        var expected = `var a = function (){};`;
        astEqual(astNode, expected);
    });
});