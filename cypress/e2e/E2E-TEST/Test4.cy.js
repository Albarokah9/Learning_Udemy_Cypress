/// <reference types="cypress" />

describe('My Four Test Suite', () => {
    it('My Four Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Handle Alert Popups
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();
        // Window:alert
        cy.on('window:alert', (str) => {
            // Mocha assertion
            expect(str).to.equal(
                'Hello , share this practice page and share your knowledge'
            );
        });
        // Window:confirm
        cy.on('window:confirm', (str) => {
            // Mocha assertion
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });
    });
});
