const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 1280,
    viewportHeight: 720,
    env: {
      configFile: "desktop",
    },
  },
  desktop: {
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  mobile: {
    viewportWidth: 375,
    viewportHeight: 667,
  },
});
