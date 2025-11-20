describe('My Three Test Suite', function () {
    it('My Three Test Case', function () {
        // Visit a web page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        /**
         * Checkboxes
         */
        // Check checkbox Option1 and verify it is checked and has the correct value
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        // Uncheck checkbox Option1 and verify it is not checked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        // Check multiple checkboxes: Option2 and Option3
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
        /**
         * Static Dropdown
         */
        // Select "option2" from static dropdown and verify selected value
        cy.get('select').select('option2').should('have.value', 'option2');
        /**
         * Dynamic Dropdown
         */
        // Type 'ind' in autocomplete field to trigger dynamic dropdown
        cy.get('#autocomplete').type('ind');
        // Iterate through dropdown and click 'Indonesia'
        cy.get('.ui-menu-item div').each(($el, index, $list) => { if ($el.text() === 'Indonesia') { cy.wrap($el).click(); } });
        // Verify selected auto-complete value
        cy.get('#autocomplete').should('have.value', 'Indonesia');
        // Verify textbox visible, hide it, verify hidden
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        // Show textbox again and verify visible
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
        /**
         * Handle Radio Buttons
         */
        // Select radio2 and verify it is checked
        cy.get('[Value="radio2"]').check().should('be.checked');
    });
});
