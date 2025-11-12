/// <reference types="cypress" />

describe('Handle Mouse Hover', () => {
    it('Test case for mouse hover actions', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Mouse Hover action
        //cy.get('div.mouse-hover-content').invoke('show');
        // Click on the 'Top' option
        cy.contains('Top').click({ force: true });
        // Assert that the URL includes 'top'
        cy.url().should('include', 'top');
    });
});
