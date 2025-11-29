/**
 * Handling Frames with Cypress using real time example
 * npm install -D cypress-iframe
 */
/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Handling Frames', () => {
    it('Test', () => {
        // Visit URL from Cypress environment variable
        cy.visit(Cypress.env('practiceUrl'));
        // Ensure iframe is fully loaded before interacting
        cy.frameLoaded('#courses-iframe');
        // Switch context to iframe and click Mentorship link (first index)
        cy.iframe('#courses-iframe').find("a[href*='mentorship']").eq(0).click();
        // Wait until iframe navigates to Mentorship URL
        cy.frameLoaded('#courses-iframe', { url: /mentorship/i });
        cy.iframe().within(() => {
            // Verifikasi seluruh teks di dalam h1
            cy.get('h1').should('contain.text', 'Get Personal Guidance from');


            // Verifikasi teks dalam span yang memiliki class "text-primary"
           cy.get('h1 span.text-primary').should('have.text', 'Rahul Shetty');
        });

        // Assert that there are exactly 2 elements with class 'pricing-title'
        // cy.iframe()
        //     .find("h1[class*='pricing-title']", { timeout: 10000 })
        //     .should('have.length', 2);
        // // Guard assertion (commented out): ensure at least 1 title is visible
        // cy.iframe('#courses-iframe')
        //     .find('h1.pricing-title, h2.pricing-title', { timeout: 15000 })
        //     .should('be.visible')
        //     .as('titles'); // Save element as alias
        // // Non-retry assert against aliased subject (commented section)
        // cy.get('@titles').then(($els) => {
        //     expect($els.length, 'pricing titles count').to.eq(2);
        // });
    });
});
