describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Remove target attribute and click
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        // Open the URL in the same tab
        cy.origin('https://www.qaclickacademy.com', () => {
            // Perform actions in the new origin
            cy.get("#navbarSupportedContent a[href*='about']").click();
            // Assert mengandung text tertentu, menggunakan 'contain'
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
            // Assert mengandung text sama persis, menggunakan 'have.text'
            cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ');
        });
    });
});
