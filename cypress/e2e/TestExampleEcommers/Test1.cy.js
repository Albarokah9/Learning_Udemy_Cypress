/// <reference types="cypress" />
import ConfirmationPage from '../../support/Page_Object_Model/ConfirmationPage';
import HomePage from '../../support/Page_Object_Model/HomePage';

describe('End to End Ecommerce Test', function () {
    beforeEach(function () {
        cy.fixture('example').then((data) => {
            this.data = data;
            this.homePage = new HomePage();
        });
    });

    it('Submit Order', function () {
        const { productName, username, password, country } = this.data;
        const PRICE_LIMIT = 200000;

        // 1. Navigate to Home and Login
        this.homePage.goTo();
        const productPage = this.homePage.login(username, password);

        // 2. Verify Login and Product Page
        this.homePage.verifyLoginSuccess();
        productPage.verifyPageLoaded();
        productPage.getProductCards().should('have.length', 4);

        // 3. Add Products to Cart
        productPage.addProductByName(productName);
        productPage.addFirstProduct();

        // 4. Verify Cart Total
        const cartPage = productPage.goToCart();
        cartPage.getCartTotal().then((sum) => {
            expect(sum).to.be.lessThan(PRICE_LIMIT);
        });

        // 5. Checkout and Confirmation
        const confirmationPage = cartPage.proceedToCheckout();
        confirmationPage.checkTermsAndConditions();
        confirmationPage.submitOrder(country);

        // 6. Verify Success Message
        confirmationPage.getSuccessAlert().should('contain.text', 'Success');
    });
});
