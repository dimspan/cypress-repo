const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  numTestsKeptInMemory: 2,
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin.js')(on) //here in the video plugin is without the .js
            
      // return require('./cypress/plugins/index.js')(on, config)
      // implement node event listeners here
    },
  },
});
