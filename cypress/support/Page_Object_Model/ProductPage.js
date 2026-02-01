import CartPage from './CartPage';

/**
 * @class ProductPage
 * @extends BasePage
 */
class ProductPage {
    /**
     * Memverifikasi apakah halaman produk telah dimuat dengan benar.
     * @returns {void}
     */
    verifyPageLoaded() {
        cy.contains('Shop Name').should('be.visible');
    }

    /**
     * Mendapatkan semua elemen kartu produk.
     * @returns {Cypress.Chainable} Element kartu produk
     */
    getProductCards() {
        return cy.get('app-card');
    }

    /**
     * Menambahkan produk ke keranjang berdasarkan nama produk.
     * @param {string} productName - Nama produk yang ingin ditambahkan
     * @returns {void}
     */
    addProductByName(productName) {
        cy.get('app-card')
            .should('be.visible')
            .filter(`:contains("${productName}")`)
            .then(($element) => {
                cy.wrap($element).should('have.length', 1);
                cy.wrap($element).contains('button', 'Add').click();
            });
    }

    /**
     * Menambahkan produk pertama yang ditemukan ke keranjang.
     * @returns {void}
     */
    addFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click();
    }

    /**
     * Mengarahkan pengguna ke halaman keranjang belanja (checkout).
     * @returns {CartPage} Instance baru dari CartPage
     */
    goToCart() {
        cy.contains('a', 'Checkout').click();
        return new CartPage();
    }
}

export default ProductPage;
