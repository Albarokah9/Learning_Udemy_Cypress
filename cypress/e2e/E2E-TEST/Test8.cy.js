/**
 * Handling Child Windows using Cypress
 */
/// <reference types="cypress" />

describe('Handling Child Windows', () => {
    it('Test', () => {
        cy.visit(Cypress.env('practiceUrl'));
        cy.get('#opentab').then(function (el) {
            const url = el.prop('href');
            cy.log(url);
            cy.visit(url); //qaclickacademy.com
            cy.origin(url, () => {
                {
                    cy.get("div.sub-menu-bar a[href*='about']").click();
                    cy.contains('Welcome to QAClick Academy ').should('be.visible');
                }

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
