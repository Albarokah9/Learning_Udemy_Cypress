/// <reference types="cypress" />
/**
 * Strategy of automation calendars using Cypress
 */
describe('Handling Calenders', () => {
    it('Test', () => {
        // Set test data for month, date, year
        const monthNumber = '6'; // July (0-based index)
        const date = '15';
        const year = '2027';
        const expectedList = [monthNumber, date, year];
        // Visit offers page
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        // Click on date picker input to open calendar
        cy.get('.react-date-picker__wrapper').should('be.visible').click();
        // Click navigation label twice to open year selector
        cy.get('.react-calendar__navigation__label').should('be.visible').click();
        cy.get('.react-calendar__navigation__label').click();
        // Select desired year
        cy.contains('button', year).should('be.visible').click();
        // Select desired month from year view
        cy.get('.react-calendar__year-view__months__month').eq(monthNumber - 1).should('be.visible').click();
        // Select desired date from month view
        cy.contains('.react-calendar__month-view__days__day', date).should('be.visible').click();
        // Validate selected date values (month, date, year in input fields)
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
            cy.wrap($el).invoke('val').should('eq', expectedList[index]);
        });
    });
});
