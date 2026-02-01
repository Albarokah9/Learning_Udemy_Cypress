/**
 * Test Suite: Automation Practice - Advanced Child Windows
 * File: Test8.cy.js
 *
 * Pengujian tingkat lanjut untuk menangani child windows dengan ekstraksi URL dan cy.origin.
 */

/// <reference types="cypress" />
describe('Handling Child Windows', () => {
    it('Test', () => {
        // Test Steps:
        // Visit URL using Cypress environment variable
        cy.visit(Cypress.env('practiceUrl'));
        // Access the 'Open Tab' link and extract its href value
        cy.get('#opentab').then(function (el) {
            const url = el.prop('href');
            // Log extracted URL in Cypress log
            cy.log(url);
            // Visit the extracted URL directly
            cy.visit(url); //qaclickacademy.com
            // Switch context to child window domain using cy.origin
            cy.origin(url, () => {
                // Click on About link inside new origin
                cy.get("div.sub-menu-bar a[href*='about']").click();
                // Assert visibility of Welcome text after navigation
                cy.contains('Welcome to QAClick Academy ').should('be.visible');
                /**
                 cy.get('#opentab').then($a => {
                    const href = $a.prop('href'); // https://www.qaclickacademy.com/
                    const { origin } = new URL(href); // https://www.qaclickacademy.com
                    // Pindahkan semua aksi di origin baru ke dalam cy.origin
                    cy.origin(origin, { args: { href } }, ({ href }) => {
                        cy.visit(href); // visit full URL di origin baru
                        cy.get("div.sub-menu-bar a[href*='about']").click();
                        cy.contains('Welcome to QAClick Academy ').should('be.visible');
                    });
                });
                 */
            });
        });
    });
});
