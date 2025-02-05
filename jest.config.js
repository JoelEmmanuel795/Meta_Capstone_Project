module.exports = {
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Ensure your setupTests.js is loaded
    testEnvironment: "jsdom",
  };
  