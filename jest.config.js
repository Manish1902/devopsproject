module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./test-results",
        outputName: "junit.xml"
      }
    ]
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};