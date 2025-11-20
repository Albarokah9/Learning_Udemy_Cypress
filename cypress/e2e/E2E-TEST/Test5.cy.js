describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        // Visit main page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Remove target attribute to force open link in same tab
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        // Switch context to new origin (child window)
        cy.origin('https://www.qaclickacademy.com', () => {
            // Click About link in navigation
            cy.get("#navbarSupportedContent a[href*='about']").click();
            // Assert heading contains specific text (partial match)
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
            // Assert heading matches exact text (full match)
            cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ');
        });
    });
});
