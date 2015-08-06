# tagged-template-to-ast [![Build Status](https://travis-ci.org/azu/tagged-template-to-ast.svg?branch=master)](https://travis-ci.org/azu/tagged-template-to-ast)


`toAST` template tagged function that inline AST Node to source code.

Combine source code with AST Node.

for more information about **tagged template strings** and see [developer.mozilla.org/docs/Web/JavaScript/Reference/template_strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/template_strings)

## Installation

    npm install tagged-template-to-ast

## Usage

### `toAST` : AST

`toAST` tag function help to inline AST Node to source code.

```js
toAST`var foo = ${ASTNode}`; // return AST
```

Example:

```js
import toAST from "tagged-template-to-ast"
// `function(){}` expression
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
// astNode is the AST of  `var a = function (){};`
```

Combine `code` with AST Node.

```js
import {parse} from "esprima"
import toAST from "tagged-template-to-ast"
var nodeForInline = parse('"string"');
var astNode = toAST`var a = ${nodeForInline}`;
// astNode is the AST of `var a = "string";`
```

Could inline to body block too!

```js
import {parse} from "esprima"
import toAST from "tagged-template-to-ast"
import astEqual from "ast-equal"
var aNodeForBody = parse("sum(1);");
var astNode = toAST`if(true){
    ${aNodeForBody}
}`;
var expected = `if(true){
    sum(1);
}`;
// test helper to assert JavaScript AST equality.
// https://github.com/azu/ast-equal
astEqual(astNode, expected);
```

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT