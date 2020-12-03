"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rule = void 0;
// tslint:disable no-use-before-declare
var tslint_1 = require("tslint");
var ts = require("typescript");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var blankLinesAfterImport = this.ruleArguments[0] || 1;
        return this.applyWithWalker(new Walker(sourceFile, this.ruleName, {
            blankLinesAfterImport: blankLinesAfterImport
        }));
    };
    Rule.metadata = {
        ruleName: 'blank-lines-after-imports',
        description: 'Helps to keep blank lines after import statements.',
        options: {
            type: 'number'
        },
        optionsDescription: 'Number of blank lines after imports.',
        type: 'style',
        typescriptOnly: false,
        hasFix: true
    };
    return Rule;
}(tslint_1.Rules.AbstractRule));
exports.Rule = Rule;
var Walker = /** @class */ (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.walk = function (sourceFile) {
        var importStatements = sourceFile.statements.filter(function (statement) {
            return ts.isImportDeclaration(statement);
        });
        var lastImportStatement = importStatements[importStatements.length - 1];
        if (lastImportStatement) {
            this.checkLastImport(lastImportStatement);
        }
    };
    Walker.prototype.checkLastImport = function (node) {
        var blankLinesAfterImport = this.options.blankLinesAfterImport;
        if (node && node.parent) {
            var parent = node.parent;
            var nodePosition = parent.statements.indexOf(node);
            var nextNode = parent.statements[nodePosition + 1];
            if (nextNode) {
                this.checkForNewLine(node, nextNode, blankLinesAfterImport);
            }
        }
    };
    Walker.prototype.checkForNewLine = function (node, nextNode, blankLinesAfterImport) {
        var lineDifference = this.getLineDifference(node, nextNode);
        var expectedLineDifference = blankLinesAfterImport + 1;
        if (lineDifference < expectedLineDifference) {
            var suffix = blankLinesAfterImport > 1 ? 's' : '';
            var message = "Expected " + blankLinesAfterImport + " blank line" + suffix + " after the last import statement";
            var fix = new tslint_1.Replacement(node.getStart() + node.getWidth(), 0, '\n');
            this.addFailureAt(node.getStart(), node.getWidth(), message, fix);
        }
    };
    Walker.prototype.getLineDifference = function (node, nextNode) {
        var startNode = nextNode.getFirstToken() || nextNode;
        var endNode = node.getLastToken() || node;
        return this.getNodeLine(startNode) - this.getNodeLine(endNode);
    };
    Walker.prototype.getNodeLine = function (node) {
        var sourceFile = this.getSourceFile();
        var lastToken = node.getLastToken();
        var start = (lastToken || node).getStart(sourceFile);
        return ts.getLineAndCharacterOfPosition(sourceFile, start).line;
    };
    return Walker;
}(tslint_1.AbstractWalker));
