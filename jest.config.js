/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@Domains/(.*)$':['<rootDir>/src/Domains/$1'],
    '^@Infrastructures/(.*)$': ['<rootDir>/src/Infrastructures/$1'],
    '^@Interface/(.*)$': ['<rootDir>/src/Interfaces/$1'],
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};