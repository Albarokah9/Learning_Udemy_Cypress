/// <reference types="cypress" />

/**
 * Test Suite: Automation Practice - Mouse Hover
 * File: Test7.cy.js
 *
 * Pengujian untuk menangani aksi mouse hover menggunakan mode force click.
 */
describe('Handle Mouse Hover', () => {
    it('Test case for mouse hover actions', () => {
        // Test Steps:
        // Visit practice page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Click on 'Top' option, using force to bypass hover state
        cy.contains('Top').click({ force: true });
        // Assert URL includes 'top' after clicking
        cy.url().should('include', 'top');
    });
});
