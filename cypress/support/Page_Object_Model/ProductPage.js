import CartPage from '../../support/Page_Object_Model/CartPage';
class ProductPage {
    pageValidation() {
        cy.contains('Shop Name').should('be.visible');
        //return this;
    }
    getCardCount() {
        return cy.get('app-card');
    }
    selectProduct(productName) {
        cy.get('app-card')
            .should('be.visible')
            .filter(`:contains("${productName}")`)
            .then(($element) => {
                // Pastikan hanya satu produk yang ditemukan
                cy.wrap($element).should('have.length', 1);
                // Klik tombol Add pada produk tersebut
                cy.wrap($element).contains('button', 'Add').click();
            });
        //return this;
    }
    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click();
        //return this;
    }
    goToCart() {
        cy.contains('a', 'Checkout').click();
        return new CartPage();
    }
}

export default ProductPage;
