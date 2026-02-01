/**
 * @class ConfirmationPage
 * @extends BasePage
 */
class ConfirmationPage {
    /**
     * Mencentang kotak persetujuan syarat dan ketentuan.
     * @returns {void}
     */
    checkTermsAndConditions() {
        cy.get('label[for="checkbox2"]')
            .scrollIntoView()
            .should('be.visible')
            .click('topLeft');
    }

    /**
     * Mengirimkan pesanan belanja dengan detail negara.
     * @param {string} country - Nama negara tujuan pengiriman
     * @returns {void}
     */
    submitOrder(country) {
        cy.submitFormDetails(country);
    }

    /**
     * Mendapatkan elemen notifikasi sukses setelah pemesanan.
     * @returns {Cypress.Chainable} Element alert success
     */
    getSuccessAlert() {
        return cy.get('.alert-success');
    }
}

export default ConfirmationPage;
