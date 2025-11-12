describe('My First Test Suite', function () {
    it('My First Test Case', function () {
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
        // Assert that only 4 product is visible
        cy.get('.product:visible').should('have.length', 4);
        // Parent child chaining
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length', 4);
        // Add the third product to the cart
        cy.get('@productLocator')
            .find('.product')
            .eq(2)
            .contains('ADD TO CART')
            .click()
            .then(function () {
                console.log('Added to cart');
            });
        // Iterate through each product and add "Cashews" to the cart
        cy.get('@productLocator')
            .find('.product')
            .each(($el, index, $list) => {
                const textVeg = $el.find('h4.product-name').text();
                if (textVeg.includes('Cashews')) {
                    cy.wrap($el).find('button').click();
                }
            });
        /* Assert if logo text is correctly displayed        
        cy.get('.brand').invoke('text').then((text) => {
            cy.log(`Actual text is: ${text}`);
        }); */

        // Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART');
        // this is to print in logs
        cy.get('.brand').then(function (logoElement) {
            cy.log(logoElement.text());
        });
    });
});
