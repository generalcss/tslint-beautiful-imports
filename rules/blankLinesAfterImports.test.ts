import { lintHelper } from '../helpers/linting-test.helpers';


const ruleName = 'blank-lines-after-imports';

describe('blank lines after imports', () => {

  describe('2 blank lines', () => {
    test('error on 1 blank line', () => {
      const sourceFile = `
        import * as React from 'react';
        import './styles.scss';

        const myVar = 'dummy';
      `;

      const result = lintHelper({ sourceFile, ruleName });
      expect(result.errorCount).toBe(1);
    });

    test('pass on 2 blank', () => {
      const sourceFile = `
        import * as React from 'react';
        import './styles.scss';


        const myVar = 'dummy';
      `;

      const result = lintHelper({ sourceFile, ruleName });
      expect(result.errorCount).toBe(0);
    });

    test('pass on 2 blank', () => {
      const sourceFile = `
        import * as React from 'react';
        import './styles.scss';


        const myVar = 'dummy';
      `;

      const result = lintHelper({ sourceFile, ruleName });
      expect(result.errorCount).toBe(0);
    });
  });

  describe('multiple import groups', () => {
    test('3 imports blocks with 2 blank lines after them, but more in between blocks', () => {
      const sourceFile = `
        import * as React from 'react';git push -u origin master
        import { SomeGlobalModule } from '@/utils/some-util';
        import { SomeGlobalModule } from '@/modules/some-global-module1';


        import { SomeGlobalModule } from '@/modules/some-global-module2';
        import { SomeGlobalModule } from '@/components/some-global-module3';
        import { SomeLocalModule } from '../../folder/some-local-module';



        import { SomeLocalModule } from '../folder/some-local-module';
        import { SomeLocalModule } from './folder/some-local-module';
        import '../icon.svg';
        import './styles.scss';


        const myVar = 'test';
      `;

      const result = lintHelper({ sourceFile, ruleName });
      expect(result.errorCount).toBe(0);
    });

    test('3 imports blocks with 2 blank lines after them, but 1 blank in between blocks', () => {
      const sourceFile = `
        import * as React from 'react';git push -u origin master
        import { SomeGlobalModule } from '@/utils/some-util';
        import { SomeGlobalModule } from '@/modules/some-global-module1';

        import { SomeGlobalModule } from '@/modules/some-global-module2';
        import { SomeGlobalModule } from '@/components/some-global-module3';
        import { SomeLocalModule } from '../../folder/some-local-module';

        import { SomeLocalModule } from '../folder/some-local-module';
        import { SomeLocalModule } from './folder/some-local-module';
        import '../icon.svg';
        import './styles.scss';


        const myVar = 'test';
      `;

      const result = lintHelper({ sourceFile, ruleName });
      expect(result.errorCount).toBe(0);
    });

    test('FAIL on 3 imports blocks with 1 blank lines after them, but multiple blank lines in between blocks', () => {
      const sourceFile = `
        import * as React from 'react';git push -u origin master
        import { SomeGlobalModule } from '@/utils/some-util';
        import { SomeGlobalModule } from '@/modules/some-global-module1';




        import { SomeGlobalModule } from '@/modules/some-global-module2';
        import { SomeGlobalModule } from '@/components/some-global-module3';
        import { SomeLocalModule } from '../../folder/some-local-module';



        import { SomeLocalModule } from '../folder/some-local-module';
        import { SomeLocalModule } from './folder/some-local-module';
        import '../icon.svg';
        import './styles.scss';

        const myVar = 'test';
      `;

      const result = lintHelper({ sourceFile, ruleName });
      expect(result.errorCount).toBe(1);
    });

    test('FAIL on 3 imports blocks with no blank lines after them, but multiple blank lines in between blocks', () => {
      const sourceFile = `
        import * as React from 'react';git push -u origin master
        import { SomeGlobalModule } from '@/utils/some-util';
        import { SomeGlobalModule } from '@/modules/some-global-module1';




        import { SomeGlobalModule } from '@/modules/some-global-module2';
        import { SomeGlobalModule } from '@/components/some-global-module3';
        import { SomeLocalModule } from '../../folder/some-local-module';

        import { SomeLocalModule } from '../folder/some-local-module';
        import { SomeLocalModule } from './folder/some-local-module';
        import '../icon.svg';
        import './styles.scss';
        const myVar = 'test';
      `;

      const result = lintHelper({ sourceFile, ruleName });
      expect(result.errorCount).toBe(1);
    });
  });
});