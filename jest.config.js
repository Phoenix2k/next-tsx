const { defaults } = require('jest-config');

module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: '__tests__/coverage',
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc.json',
      tsconfig: '__tests__/jest/tsconfig.json'
    }
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/__tests__/jest/jest.setup.ts'],
  snapshotSerializers: ['jest-emotion'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/unit/**/*.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  verbose: true
};
