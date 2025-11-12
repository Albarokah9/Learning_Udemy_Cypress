/**
 * Handling Frames with Cypress using real time example
 * npm install -D cypress-iframe
 */
/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Handling Frames', () => {
    it('Test', () => {
        cy.visit(Cypress.env('practiceUrl'));
        // Pastikan iframe sudah termuat
        cy.frameLoaded('#courses-iframe');
        // Berpindah konteks ke dalam iframe
        cy.iframe('#courses-iframe').find("a[href*='mentorship']").eq(0).click();
        // iframe berubah halaman → tunggu sampai URL mengandung “mentorship”
        cy.frameLoaded('#courses-iframe', { url: /mentorship/i });
        // Verifikasi ada 2 elemen dengan class pricing-title
        cy.iframe()
            .find("h1[class*='pricing-title']", { timeout: 10000 })
            .should('have.length', 2);
        // Guard: pastikan minimal ada 1 dan visible
        // cy.iframe('#courses-iframe')
        //     .find('h1.pricing-title, h2.pricing-title', { timeout: 15000 })
        //     .should('be.visible')
        //     .as('titles'); // kunci hasil query saat ini

        // // Non-retry assert terhadap subject yang sudah “dikunci”
        // cy.get('@titles').then(($els) => {
        //     expect($els.length, 'pricing titles count').to.eq(2);
        // });
    });
});
