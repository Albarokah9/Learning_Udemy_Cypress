// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// ***********************************************
// Custom Commands JSDoc Documentation
// ***********************************************

/**
 * Mengisi detail formulir pengiriman (negara) dan menekan tombol submit.
 * @param {string} country - Nama negara yang akan dicari dan dipilih
 * @returns {void}
 * @example
 * cy.submitFormDetails('Indonesia')
 */
Cypress.Commands.add('submitFormDetails', (country) => {
    cy.get('#country').should('be.visible').type(country);
    cy.get('.suggestions ul li a').should('be.visible').click();
    cy.get('.btn-success').should('be.visible').click();
});
