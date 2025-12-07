const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
require('dotenv').config();

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    projectId: 'urf3ee',
    e2e: {
        retries: { runMode: 1, openMode: 1 },
        env: {
            practiceUrl: "https://rahulshettyacademy.com/AutomationPractice/",
            Url: "https://rahulshettyacademy.com/loginpagePractise/#"
        },
        viewportWidth: 1366,
        viewportHeight: 768,
        defaultCommandTimeout: 6000,
        pageLoadTimeout: 60000,
        chromeWebSecurity: false,
        watchForFileChanges: true,
        async setupNodeEvents(on, config) {
            // Mochawesome reporter
            require('cypress-mochawesome-reporter/plugin')(on);

            // Cucumber preprocessor
            await addCucumberPreprocessorPlugin(on, config);

            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            return config;
        },
        specPattern: 'cypress/e2e/**/*.{cy.{js,jsx,ts,tsx},feature}',
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        video: true,
    },
});
