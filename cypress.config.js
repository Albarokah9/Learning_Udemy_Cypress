const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    projectId: 'urf3ee',
    e2e: {
        retries: { runMode: 1 },
        viewportWidth: 1366,
        viewportHeight: 768,
        defaultCommandTimeout: 6000,
        pageLoadTimeout: 60000,
        chromeWebSecurity: false,
        watchForFileChanges: true,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            return config;
        },
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        video: true,
    },
});
