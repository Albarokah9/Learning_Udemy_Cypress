describe('My First Test Suite', function () {
    it('My First Test Case', function () {
        // Visit a web page
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        // Check the title of the page
        cy.title().should('eq', 'GreenKart - veg and fruits kart');
        // Log the title of the page to Cypress log
        cy.title().then((title) => {
            cy.log(title);
        });
        // Check if the URL includes a specific string ("rahulshettyacademy")
        cy.url().should('include', 'rahulshettyacademy');
        // Log the URL of the page
        cy.url().then((url) => {
            cy.log(url);
        });
        // Get Search box and type 'ca'
        cy.get('.search-keyword').type('ca');
        // Wait for 2 seconds to allow products to filter
        cy.wait(2000);
        // Assert that only 4 products are visible after search
        cy.get('.product:visible').should('have.length', 4);
        // Store products container element using alias
        cy.get('.products').as('productLocator');
        // Verify that inside products container there are 4 product elements
        cy.get('@productLocator').find('.product').should('have.length', 4);
        // Add the third product to the cart by its index (index starts from 0)
        cy.get('@productLocator')
            .find('.product')
            .eq(2)
            .contains('ADD TO CART')
            .click()
            .then(function () {
                console.log('Added to cart');
            });
        // Iterate through all products and add "Cashews" product to the cart if found
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
        // Assert if logo text is exactly "GREENKART"
        cy.get('.brand').should('have.text', 'GREENKART');
        // Log the logo text to Cypress logs
        cy.get('.brand').then(function (logoElement) {
            cy.log(logoElement.text());
        });
    });
});
