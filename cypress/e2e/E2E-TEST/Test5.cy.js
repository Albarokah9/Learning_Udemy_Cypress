/**
 * Test Suite: Automation Practice - Child Windows
 * File: Test5.cy.js
 *
 * Pengujian untuk menangani pembukaan link di tab baru dengan cara menghapus atribut target.
 */
describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        // Test Steps:
        // 1. Mengunjungi halaman utama web Automation Practice untuk memulai sesi uji
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Mock domain qaclickacademy.com yang expired/parked (GoDaddy lander) agar tes tetap berjalan sukses
        cy.intercept('GET', '**/lander*', {
            body: '<html><body><a href="https://www.qaclickacademy.com/about">about</a></body></html>'
        }).as('mockLander');

        cy.intercept('GET', '**/about', {
            body: '<html><body><div class="mt-50"><h2>Welcome to QAClick Academy </h2></div></body></html>'
        }).as('mockAbout');

        // 2. Menghapus atribut target pada link agar tab tidak terbuka di jendela baru (bypass window tab)
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        
        // 3. Masuk ke halaman origin yang baru untuk memvalidasi halaman eksternal
        cy.origin('https://www.qaclickacademy.com', () => {
            // Mencegah error uncaught exception di cross-origin menggagalkan pengujian
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
            });

            // 4. Klik menu 'About' untuk masuk ke halaman profil mereka
            cy.get("a[href*='about']").first().click();
            
            // 5. Memastikan judul heading yang ditampilkan benar-benar sesuai dan terbaca dengan baik
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
            cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ');
        });
    });
});
