describe('My Three Test Suite', function () {
    it('My Three Test Case', function () {
        // Test steps will go here
        // Visit a web page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        /**
         * Checkboxes
         */
        // Handle checkboxes
        cy.get('#checkBoxOption1')
            .check()
            .should('be.checked')
            .and('have.value', 'option1');
        // Uncheck the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        // Check multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
        /**
         * Static Dropdown
         */
        // Handle static dropdown
        cy.get('select').select('option2').should('have.value', 'option2');
        /**
         * Dynamic Dropdown
         */
        // Handle dynamic dropdown
        cy.get('#autocomplete').type('ind');

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'Indonesia') {
                cy.wrap($el).click();
            }
        });
        // Automcomplete
        cy.get('#autocomplete').should('have.value', 'Indonesia');
        // Visible and Invisible Elements
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        /**
         * Handle Radio Buttons
         */
        cy.get('[Value="radio2"]').check().should('be.checked');
    });
});
