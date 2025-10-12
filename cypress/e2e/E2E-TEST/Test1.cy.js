describe('My First Test Suite', function ()  {
  it('My First Test Case', function ()  {
    // Test steps will go here
    // Visit a web page
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    // Check the title of the page
    cy.title().should('eq', 'GreenKart - veg and fruits kart');
    // Log the title of the page
    cy.title().then((title) => {
    cy.log(title)
  })
    // Check if the URL includes a specific string
    cy.url().should('include', 'rahulshettyacademy');
    // Log the URL of the page
    cy.url().then((url) => {
      cy.log(url)
    })
    // Get Seacrh box adn type ca
    cy.get('.search-keyword').type('ca');
    // Wait for 2 seconds
    cy.wait(2000);
    // Assert that only 4 product is visible
    cy.get('.product:visible').should('have.length', 4);
  });

});