import ProductPage from '../../support/Page_Object_Model/ProductPage';

class HomePage {
    goTo() {
        cy.visit(Cypress.env('EndtoEndUrl'));
        //return this;
    }
    login(username, password) {
        cy.get('#username').should('be.visible').type(username);
        cy.get('#password').should('be.visible').type(password);
        cy.contains('Sign In').click();
        return new ProductPage();
    }
    VerifyLoginSuccess() {
        cy.url().should('include', 'shop');
        //return this;
    }
}

export default HomePage;
