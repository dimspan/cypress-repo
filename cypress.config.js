const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '3w2yrk',
  reporter:"cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: ["mochawesome","junit"],
    charts: true,
    reportPageTitle:"QA Front-end tests report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts:false,
    env:{
      chromeWebSecurity: false,
    },
    experimentalMemoryManagement: true,
    
  },
  video: false, 
  screenshotOnRunFailure: true,
  fixturesFolder: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin.js')(on) //here in the video plugin is without the .js
      // return require('./cypress/plugins/index.js')(on, config)
      
    },
    baseUrl: 'https://epanel.enetsites.com/widgets',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: false,   
  },
  
})
