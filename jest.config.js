module.exports = {
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'modules/**/*.{tsx,ts}',
    '!modules/**/*.d.ts',
    '!cypress/**/*',
    '!**/header/**/lib/Header.tsx',
    '!**/common/**/ControlledComponentWrapper.tsx',
    '!**/common/**/InputProviderDecorator.tsx',
    '!**/index.{ts,tsx,js,jsx}',
    '!**/stories*.{ts,tsx,js,jsx}',
  ],
  coverageReporters: ['text', 'clover', 'html'],
  coverageDirectory: '<rootDir>/build/reports/jest',
  coverageThreshold: {
    global: {
      branches: 65,
      functions: 65,
      lines: 65,
      statements: 65,
    },
  },
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/cypress/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  clearMocks: true,
  reporters: ['default', ['jest-junit', {suiteName: 'Canvas Kit tests'}]],
  testURL: 'http://localhost',
};
