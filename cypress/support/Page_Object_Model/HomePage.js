import ProductPage from './ProductPage';

class HomePage {
    goTo() {
        cy.visit(Cypress.env('Url'));
    }

    login(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.contains('Sign In').click();
        return new ProductPage();
    }

    verifyLoginSuccess() {
        cy.url().should('include', 'shop');
    }
}

export default HomePage;
