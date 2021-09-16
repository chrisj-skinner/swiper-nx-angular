const path = require('path');
const { isCI, readFile, yamlParser } = require('@domgen/dgx-common-core');

module.exports = {
  displayName: 'test-app-feature-shell',
  preset: '../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        outputPath: './reports/libs/test-app/feature-shell/html/index.html',
        includeConsoleLog: true,
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
    [
      'jest-junit',
      {
        outputDirectory: './reports/libs/test-app/feature-shell',
        outputName: 'junit.xml',
        reportTestSuiteErrors: true,
      },
    ],
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer',
        ],
      },
    },
  },
  coverageDirectory: '../../../coverage/libs/test-app/feature-shell',
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
