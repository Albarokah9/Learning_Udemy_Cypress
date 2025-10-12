const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        video: true,
        //experimentalStudio: true
    },
});
