const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1366,
        viewportHeight: 768,
        defaultCommandTimeout: 6000,
        pageLoadTimeout: 60000,
        video: true,
        chromeWebSecurity: false,
        watchForFileChanges: true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        video: true,
        experimentalStudio: false,
    },
});
