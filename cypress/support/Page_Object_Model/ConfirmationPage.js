class ConfirmationPage {
    klikCheckbox() {
        cy.get('label[for="checkbox2"]')
            .scrollIntoView()
            .should('be.visible')
            .click('topLeft');
    }
    submitFromDetails(country) {
        cy.submitFormDetails(country);
        // cy.get('#country').type('Indonesia');
        // cy.get('.suggestions ul li a').click();
        // cy.get('.btn-success').click();
        // return this;
    }
    getAlertMessage() {
        return cy.get('.alert-success');
    }
}

export default ConfirmationPage;
