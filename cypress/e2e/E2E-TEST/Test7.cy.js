/// <reference types="cypress" />
describe('Handle Mouse Hover', () => {
    it('Test case for mouse hover actions', () => {
        // Visit practice page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Click on 'Top' option, using force to bypass hover state
        cy.contains('Top').click({ force: true });
        // Assert URL includes 'top' after clicking
        cy.url().should('include', 'top');
    });
});