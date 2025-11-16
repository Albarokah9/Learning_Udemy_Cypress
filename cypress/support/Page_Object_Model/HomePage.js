import ProductPage from '../../support/Page_Object_Model/ProductPage';

class HomePage {

    // Membuka halaman utama aplikasi
    goTo() {
        cy.visit(Cypress.env('EndtoEndUrl'));
    }

    // Melakukan login dan setelah berhasil mengembalikan instance ProductPage
    login(username, password) {
        cy.get('#username').should('be.visible').type(username);
        cy.get('#password').should('be.visible').type(password);
        cy.contains('Sign In').click();
        return new ProductPage();
    }

    // Memvalidasi bahwa user berhasil login dan dialihkan ke halaman "shop"
    VerifyLoginSuccess() {
        cy.url().should('include', 'shop');
    }
}

export default HomePage;
