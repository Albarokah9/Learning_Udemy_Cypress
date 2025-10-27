describe('My First Test Suite', function () {
    it('My Second Test Case', function () {
        // Test steps will go here
        // Visit a web page
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        // Check the title of the page
        cy.title().should('eq', 'GreenKart - veg and fruits kart');
        // Log the title of the page
        cy.title().then((title) => {
            cy.log(title);
        });
        // Check if the URL includes a specific string
        cy.url().should('include', 'rahulshettyacademy');
        // Log the URL of the page
        cy.url().then((url) => {
            cy.log(url);
        });
        // Get Seacrh box adn type ca
        cy.get('.search-keyword').type('ca');
        // Wait for 2 seconds
        cy.wait(2000);
        // Parent child chaining
        cy.get('.products').as('productLocator');
        // Iterate through each product and add "Cashews" to the cart
        cy.get('@productLocator')
            .find('.product')
            .each(($el, index, $list) => {
                const textVeg = $el.find('h4.product-name').text();
                if (textVeg.includes('Cashews')) {
                    cy.wrap($el).find('button').click();
                }
            });
        cy.get('.cart-icon').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    });
});
