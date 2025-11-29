class ConfirmationPage {
    checkTermsAndConditions() {
        cy.get('label[for="checkbox2"]')
            .scrollIntoView()
            .should('be.visible')
            .click('topLeft');
    }

    submitOrder(country) {
        cy.submitFormDetails(country);
    }

    getSuccessAlert() {
        return cy.get('.alert-success');
    }
}

export default ConfirmationPage;
