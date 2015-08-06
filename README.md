# tagged-template-to-ast

`toAST` function that is used for tagged template string.

Combine source code` with AST Node.

## Installation

    npm install tagged-template-to-ast

## Usage

```js
import toAST from "tagged-template-to-ast"
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
var nodeForInline = parse('"string"');
var astNode = toAST`var a = ${nodeForInline}`;
// astNode is the AST of `var a = "string";`
```


## Tests

- [ ] Write How to Tests

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT