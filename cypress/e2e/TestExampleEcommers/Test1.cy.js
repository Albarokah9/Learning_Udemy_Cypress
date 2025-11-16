/// <reference types="cypress" />
// Import Page Object Model dari HomePage.js dan ProductPage.js
import ConfirmationPage from '../../support/Page_Object_Model/ConfirmationPage';
import HomePage from '../../support/Page_Object_Model/HomePage';
import ProductPage from '../../support/Page_Object_Model/ProductPage';

/**
 * @description This test case verifies the login functionality of the e-commerce website.
 */
describe('End to End ecommers Test', function () {
    before(function () {
        cy.fixture('example').then((data) => {
            this.data = data;
            this.homePage = new HomePage();
        });
    });

    it('Submit Order', function () {
        const productName = this.data.productName;
        this.homePage.goTo();
        cy.log(this.data.username, this.data.password);
        //cy.pause();
        cy.wait(4000);
        const productPage = this.homePage.login(
            this.data.username,
            this.data.password
        );
        this.homePage.VerifyLoginSuccess();
        productPage.pageValidation();
        productPage.getCardCount().should('have.length', 4);
        productPage.selectProduct(productName);
        productPage.selectFirstProduct();
        const cartPage = productPage.goToCart();
        cartPage.sumOfProducts().then(function (sum) {
            // cy.log('Total sum of products: ' + sum);
            expect(sum).to.be.lessThan(200000);
        });
        const confirmationPage = cartPage.checkoutItems();
        confirmationPage.klikCheckbox();
        confirmationPage.submitFromDetails(this.data.country);
        confirmationPage.getAlertMessage().should('contain.text', 'Success');
    });
});
