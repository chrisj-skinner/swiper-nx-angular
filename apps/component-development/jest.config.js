const path = require('path');
const { isCI, readFile, yamlParser } = require('@domgen/dgx-common-core');

module.exports = {
  displayName: 'component-development',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        outputPath: './reports/apps/component-development/html/index.html',
        includeConsoleLog: true,
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
    [
      'jest-junit',
      {
        outputDirectory: './reports/apps/component-development',
        outputName: 'junit.xml',
        reportTestSuiteErrors: true,
      },
    ],
  ],
  globals: {
    'ts-jest': {
      tsonfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer',
        ],
      },
    },
  },
  coverageDirectory: '../../coverage/apps/component-development',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts', '!./src/types.ts'],
  coverageReporters: ['text', 'html', 'cobertura', 'clover'],
  ...(isCI()
    ? {}
    : yamlParser(readFile(path.join(__dirname, 'dgxcodecov.yml')))),
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
