/// <reference types="cypress" />
describe('My Four Test Suite', () => {
    it('My Four Test Case', () => {
        // Visit Practice Page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Click Alert button to trigger window alert
        cy.get('#alertbtn').click();
        // Click Confirm button to trigger window confirm
        cy.get('[value="Confirm"]').click();
        // Handle and assert alert popup message
        cy.on('window:alert', (str) => {
            // Validate alert text using Mocha assertion
            expect(str).to.equal(
                'Hello , share this practice page and share your knowledge'
            );
        });
        // Handle and assert confirm popup message
        cy.on('window:confirm', (str) => {
            // Validate confirm text using Mocha assertion
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });
    });
});
