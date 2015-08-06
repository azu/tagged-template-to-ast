// LICENSE : MIT
"use strict";
import {parse} from "esprima"
import {generate} from "escodegen"
function astToCode(expression) {
    return generate({
        "type": "Program",
        "body": [
            expression
        ]
    }, {
        format: {
            compact: false,
            parentheses: true,
            semicolons: false,
            safeConcatenation: false
        }
    });
}
function extractionBody(ast) {
    return ast.body[0];
}

export default function toAST(strings, ...astNodes) {
    var concatCode = strings.map((string, index) => {
        var code = (astNodes[index] ? astToCode(astNodes[index]) : "");
        return string + code;
    }).join("");
    return parse(concatCode);
}