const { defaults } = require('jest-config');

module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc.json',
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/tests/config/jest.setup.ts'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/unit/**/*.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  verbose: true
};
