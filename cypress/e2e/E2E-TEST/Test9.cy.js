/**
 * Test Suite: Handling Frames
 * File: Test9.cy.js
 * 
 * Tes ini memverifikasi interaksi Cypress dengan Iframe, termasuk navigasi internal
 * dan verifikasi konten di dalam frame setelah berpindah halaman.
 */

/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Handling Frames', () => {
    it('Test', () => {
        // Test Steps:
        // 1. Mengunjungi URL latihan dari environment variable
        cy.visit(Cypress.env('practiceUrl'));
        
        // 2. Memastikan iframe awal dimuat
        cy.frameLoaded('#courses-iframe');
        
        // 3. Mengklik link Mentorship di dalam iframe
        cy.iframe('#courses-iframe')
            .find("a[href*='mentorship']")
            .eq(0)
            .click();
        
        // 4. Menunggu hingga iframe memuat halaman mentorship (menggunakan URL filter)
        cy.frameLoaded('#courses-iframe', { url: /mentorship/i });
        
        // 5. Melakukan verifikasi konten di dalam halaman Mentorship
        cy.iframe('#courses-iframe').within(() => {
            // Memastikan teks 'Mentorship' muncul (sebagai indikator halaman benar)
            cy.contains(/Mentorship/i, { timeout: 10000 })
                .should('be.visible');
            
            // Memastikan nama 'Rahul Shetty' muncul di halaman tersebut
            cy.contains('Rahul Shetty')
                .should('be.visible');
                
            // Menggunakan regex untuk mencari deskripsi mentorship yang confirmed ada di log
            cy.contains(/mentorship program/i)
                .should('be.visible');
        });
    });
});
