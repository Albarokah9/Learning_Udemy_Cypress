const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

// Step Definitions untuk Example Feature

Given('Saya membuka halaman Google', () => {
    cy.visit('https://www.google.com');
});

When('Saya melihat search box', () => {
    cy.get('textarea[name="q"]', { timeout: 10000 }).should('be.visible');
});

Then('Halaman Google harus tampil dengan benar', () => {
    cy.url().should('include', 'google.com');
    cy.get('textarea[name="q"]').should('exist');
});

Then('Title halaman harus mengandung {string}', (expectedTitle) => {
    cy.title().should('include', expectedTitle);
});
