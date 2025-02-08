// {
//     "extends": "./cypress.config.js",
//     "video": false,
//     "baseUrl": "https://worldcup2022.enetpulse.com/en/home"
// }
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '3w2yrk',
  video: false,
  screenshotOnRunFailure: false,
  fixturesFolder: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://fodbolddk-es.enetsites.com/stillinger',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: false,
  },
})
