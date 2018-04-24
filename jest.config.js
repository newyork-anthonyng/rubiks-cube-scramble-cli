module.exports = {
  testRegex: "/lib/.*spec\\.js$",
  collectCoverageFrom: ["lib/**/*.js"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
