/// <reference types="cypress" />
/**
 * Strategy of automation calendars using Cypress
 */
describe('Handling Calenders', () => {
    it('Test', () => {
        const monthNumber = "6"; // July (0-based index)
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber, date, year];

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('.react-date-picker__wrapper').should('be.visible').click();

        // Buka selector tahun
        cy.get('.react-calendar__navigation__label').should('be.visible').click();
        cy.get('.react-calendar__navigation__label').click();

        // Pilih tahun
        cy.contains('button', year).should('be.visible').click();

        // Pilih bulan
        cy.get('.react-calendar__year-view__months__month').eq(monthNumber - 1).should('be.visible').click();

        // Pilih tanggal
        cy.contains('.react-calendar__month-view__days__day', date)
          .should('be.visible')
          .click();

        // Verifikasi tanggal terpilih
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
            cy.wrap($el).invoke('val').should('eq', expectedList[index]);
        });
    }); 
});
