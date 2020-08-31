module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['<rootDir>/tests/unit/**/*.spec.ts'],
  testURL: 'http://localhost/',
  collectCoverage: false, // no check coverage
  collectCoverageFrom: ['<rootDir>/src/components/**/*.vue']
}
