module.exports = {
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