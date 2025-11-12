/// <reference types="cypress" />
/**
 * @description This test case verifies the login functionality of the e-commerce website.
 */
describe('End to End ecommers Test', () => {
    // Nama produk yang akan dicari dan ditambahkan ke keranjang
    const productName = 'Nokia Edge';
    it('Submit Order', () => {
        // Kunjungi halaman login menggunakan environment variable
        cy.visit(Cypress.env('EndtoEndUrl'));
        // Isi username dan pastikan field terlihat
        cy.get('#username').should('be.visible').type('rahulshettyacademy');
        // Isi password dan pastikan field terlihat
        cy.get('#password').should('be.visible').type('learning');
        // Klik tombol Sign In
        cy.contains('Sign In').click();
        // Pastikan URL sudah mengarah ke halaman shop
        cy.url().should('include', 'shop');
        // Pastikan elemen "Shop Name" terlihat di halaman
        cy.contains('Shop Name').should('be.visible');
        // Pastikan ada 4 produk yang ditampilkan
        cy.get('app-card').should('have.length', 4);
        // Cari produk dengan nama yang sesuai, pastikan hanya satu, lalu klik tombol Add
        cy.get('app-card')
            .filter(`:contains("${productName}")`)
            .then(($element) => {
                // Pastikan hanya satu produk yang ditemukan
                cy.wrap($element).should('have.length', 1);
                // Klik tombol Add pada produk tersebut
                cy.wrap($element).contains('button', 'Add').click();
            });
        // Tambahan: Klik tombol Add pada produk pertama di daftar
        cy.get('app-card').eq(0).contains('button', 'Add').click();

        // Klik tombol Checkout untuk melihat ringkasan pesanan
        cy.contains('a', 'Checkout').click();

        let sum = 0;
        // Iterasi setiap harga produk di tabel checkout
        cy.get('tr td:nth-child(4) strong')
            .each(($el) => {
                // Ambil harga dari teks (contoh: "₹. 65000") dan ubah ke angka
                const amount = parseFloat(
                    $el.text().split(' ')[1].trim().replace(/,/g, '')
                );
                sum = sum + amount; // Tambahkan harga ke total
            })
            .then(() => {
                // Pastikan total harga kurang dari 2 juta
                expect(sum).to.be.lessThan(2000000);
            });

        // Klik tombol Checkout untuk melanjutkan ke halaman pembayaran
        cy.contains('button', 'Checkout').click();
        // Scroll ke checkbox syarat dan ketentuan, lalu klik
        cy.get('label[for="checkbox2"]')
            .scrollIntoView()
            .should('be.visible')
            .click('topLeft');
        // Pastikan checkbox sudah dicentang
        cy.get('#checkbox2').should('be.checked');
        // Ketik nama negara untuk pengiriman
        cy.get('#country').type('Indonesia');
        // Pilih saran negara dari dropdown
        cy.get('.suggestions ul li a').click();
        // Klik tombol untuk menyelesaikan pesanan
        cy.get('.btn-success').click();
        // Pastikan pesan sukses muncul
        cy.get('.alert-success').should('contain.text', 'Success');
    });
});
