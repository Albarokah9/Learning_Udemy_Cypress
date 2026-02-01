import ProductPage from './ProductPage';

/**
 * @class HomePage
 * @extends BasePage
 */
class HomePage {
    /**
     * Membuka halaman utama aplikasi menggunakan URL dari environment.
     * @returns {void}
     */
    goTo() {
        cy.visit(Cypress.env('Url'));
    }

    /**
     * Melakukan proses login dengan mengisi username dan password.
     * @param {string} username - Nama pengguna untuk login
     * @param {string} password - Kata sandi untuk login
     * @returns {ProductPage} Instance baru dari ProductPage
     * @example
     * homePage.login('tomsmith', 'SuperSecretPassword!')
     */
    login(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.contains('Sign In').click();
        return new ProductPage();
    }

    /**
     * Memverifikasi apakah login berhasil dengan mengecek URL.
     * @returns {void}
     */
    verifyLoginSuccess() {
        cy.url().should('include', 'shop');
    }
}

export default HomePage;
