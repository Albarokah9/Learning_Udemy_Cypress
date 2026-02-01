/// <reference types="cypress" />

/**
 * Test Suite: API Direct Request - Add Book
 * File: test3.cy.js
 *
 * Pengujian integrasi API secara langsung menggunakan cy.request untuk menambahkan buku baru.
 */
describe('My First API Test', () => {
    it('My First Test Case', () => {
        // Test Steps:
        cy.request('POST', 'https://216.10.245.166/Library/Addbook.php', {
            name: 'Learn Appium Automation with Java',
            isbn: 'bcd',
            aisle: '22s7',
            author: 'John foe',
        }).then((response) => {
            expect(response.body).to.have.property('Msg', 'successfully added');
            expect(response.status).to.eq(200);
        });
    });
});
