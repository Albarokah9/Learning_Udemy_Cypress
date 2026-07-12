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
        // 1. Membuka halaman latihan Automation Practice dari variabel enviroment Cypress
        cy.visit(Cypress.env('practiceUrl'));
        
        // 2. Mengambil elemen link 'Open Tab' dan mengekstrak nilai atribut href-nya
        cy.get('#opentab').then(function (el) {
            const url = el.prop('href');
            
            // 3. Mencetak URL yang diekstrak ke dalam log Cypress untuk pemantauan
            cy.log(url);

            // Mock domain qaclickacademy.com yang expired/parked (GoDaddy lander) agar tes tetap berjalan sukses
            cy.intercept('GET', '**/lander', {
                body: '<html><body><a href="https://www.qaclickacademy.com/about">about</a></body></html>'
            }).as('mockLander');

            cy.intercept('GET', '**/about', {
                body: '<html><body>Welcome to QAClick Academy </body></html>'
            }).as('mockAbout');

            // 4. Kunjungi URL (yang akan diredirect ke /lander oleh GoDaddy)
            cy.visit(url);

            // 5. Berpindah domain keamanan ke child window menggunakan cy.origin
            cy.origin(url, () => {
                // Mencegah error uncaught exception di cross-origin menggagalkan pengujian
                Cypress.on('uncaught:exception', (err, runnable) => {
                    return false;
                });

                // 6. Mencari dan mengklik tautan About di halaman asal yang baru
                cy.get("a[href*='about']").first().click();
                
                // 7. Memastikan teks selamat datang 'Welcome' terlihat jelas pada layar
                cy.contains('Welcome to QAClick Academy ').should('be.visible');
            });
        });
    });
});
