"use strict";
exports.__esModule = true;
var linting_test_helpers_1 = require("../helpers/linting-test.helpers");
var ruleName = 'blank-lines-after-imports';
describe('blank lines after imports', function () {
    describe('2 blank lines', function () {
        test('error on 1 blank line', function () {
            var sourceFile = "\n        import * as React from 'react';\n        import './styles.scss';\n\n        const myVar = 'dummy';\n      ";
            var result = linting_test_helpers_1.lintHelper({ sourceFile: sourceFile, ruleName: ruleName });
            expect(result.errorCount).toBe(1);
        });
        test('pass on 2 blank', function () {
            var sourceFile = "\n        import * as React from 'react';\n        import './styles.scss';\n\n\n        const myVar = 'dummy';\n      ";
            var result = linting_test_helpers_1.lintHelper({ sourceFile: sourceFile, ruleName: ruleName });
            expect(result.errorCount).toBe(0);
        });
        test('pass on 2 blank', function () {
            var sourceFile = "\n        import * as React from 'react';\n        import './styles.scss';\n\n\n        const myVar = 'dummy';\n      ";
            var result = linting_test_helpers_1.lintHelper({ sourceFile: sourceFile, ruleName: ruleName });
            expect(result.errorCount).toBe(0);
        });
    });
    describe('multiple import groups', function () {
        test('3 imports blocks with 2 blank lines after them, but more in between blocks', function () {
            var sourceFile = "\n        import * as React from 'react';git push -u origin master\n        import { SomeGlobalModule } from '@/utils/some-util';\n        import { SomeGlobalModule } from '@/modules/some-global-module1';\n\n\n        import { SomeGlobalModule } from '@/modules/some-global-module2';\n        import { SomeGlobalModule } from '@/components/some-global-module3';\n        import { SomeLocalModule } from '../../folder/some-local-module';\n\n\n\n        import { SomeLocalModule } from '../folder/some-local-module';\n        import { SomeLocalModule } from './folder/some-local-module';\n        import '../icon.svg';\n        import './styles.scss';\n\n\n        const myVar = 'test';\n      ";
            var result = linting_test_helpers_1.lintHelper({ sourceFile: sourceFile, ruleName: ruleName });
            expect(result.errorCount).toBe(0);
        });
        test('3 imports blocks with 2 blank lines after them, but 1 blank in between blocks', function () {
            var sourceFile = "\n        import * as React from 'react';git push -u origin master\n        import { SomeGlobalModule } from '@/utils/some-util';\n        import { SomeGlobalModule } from '@/modules/some-global-module1';\n\n        import { SomeGlobalModule } from '@/modules/some-global-module2';\n        import { SomeGlobalModule } from '@/components/some-global-module3';\n        import { SomeLocalModule } from '../../folder/some-local-module';\n\n        import { SomeLocalModule } from '../folder/some-local-module';\n        import { SomeLocalModule } from './folder/some-local-module';\n        import '../icon.svg';\n        import './styles.scss';\n\n\n        const myVar = 'test';\n      ";
            var result = linting_test_helpers_1.lintHelper({ sourceFile: sourceFile, ruleName: ruleName });
            expect(result.errorCount).toBe(0);
        });
        test('FAIL on 3 imports blocks with 1 blank lines after them, but multiple blank lines in between blocks', function () {
            var sourceFile = "\n        import * as React from 'react';git push -u origin master\n        import { SomeGlobalModule } from '@/utils/some-util';\n        import { SomeGlobalModule } from '@/modules/some-global-module1';\n\n\n\n\n        import { SomeGlobalModule } from '@/modules/some-global-module2';\n        import { SomeGlobalModule } from '@/components/some-global-module3';\n        import { SomeLocalModule } from '../../folder/some-local-module';\n\n\n\n        import { SomeLocalModule } from '../folder/some-local-module';\n        import { SomeLocalModule } from './folder/some-local-module';\n        import '../icon.svg';\n        import './styles.scss';\n\n        const myVar = 'test';\n      ";
            var result = linting_test_helpers_1.lintHelper({ sourceFile: sourceFile, ruleName: ruleName });
            expect(result.errorCount).toBe(1);
        });
        test('FAIL on 3 imports blocks with no blank lines after them, but multiple blank lines in between blocks', function () {
            var sourceFile = "\n        import * as React from 'react';git push -u origin master\n        import { SomeGlobalModule } from '@/utils/some-util';\n        import { SomeGlobalModule } from '@/modules/some-global-module1';\n\n\n\n\n        import { SomeGlobalModule } from '@/modules/some-global-module2';\n        import { SomeGlobalModule } from '@/components/some-global-module3';\n        import { SomeLocalModule } from '../../folder/some-local-module';\n\n        import { SomeLocalModule } from '../folder/some-local-module';\n        import { SomeLocalModule } from './folder/some-local-module';\n        import '../icon.svg';\n        import './styles.scss';\n        const myVar = 'test';\n      ";
            var result = linting_test_helpers_1.lintHelper({ sourceFile: sourceFile, ruleName: ruleName });
            expect(result.errorCount).toBe(1);
        });
    });
});
