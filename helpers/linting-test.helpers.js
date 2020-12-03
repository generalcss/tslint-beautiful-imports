"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getErrorLine = exports.lintHelper = void 0;
var tslint_1 = require("tslint");
var TSLintConfig = require("../tslint.json");
var lintHelper = function (_a) {
    var _b;
    var sourceFile = _a.sourceFile, ruleName = _a.ruleName;
    var lint = new tslint_1.Linter({ fix: false });
    var getRuleOptions = TSLintConfig.rules[ruleName];
    lint.lint('', sourceFile, tslint_1.Configuration.parseConfigFile({
        rules: (_b = {},
            _b[ruleName] = Array.isArray(getRuleOptions) ? __spreadArrays(getRuleOptions) : getRuleOptions,
            _b),
        rulesDirectory: TSLintConfig.rulesDirectory
    }));
    return lint.getResult();
};
exports.lintHelper = lintHelper;
var getErrorLine = function (failures) {
    return failures.map(function (failure) {
        var start = failures[0].startPosition.position;
        var end = failures[0].endPosition.position;
        return failure.sourceFile.text.substr(start, failure.sourceFile.text.length - end);
    });
};
exports.getErrorLine = getErrorLine;
