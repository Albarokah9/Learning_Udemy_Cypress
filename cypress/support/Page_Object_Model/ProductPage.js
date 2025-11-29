import CartPage from './CartPage';

class ProductPage {
    verifyPageLoaded() {
        cy.contains('Shop Name').should('be.visible');
    }

    getProductCards() {
        return cy.get('app-card');
    }

    addProductByName(productName) {
        cy.get('app-card')
            .should('be.visible')
            .filter(`:contains("${productName}")`)
            .then(($element) => {
                cy.wrap($element).should('have.length', 1);
                cy.wrap($element).contains('button', 'Add').click();
            });
    }

    addFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click();
    }

    goToCart() {
        cy.contains('a', 'Checkout').click();
        return new CartPage();
    }
}

export default ProductPage;
