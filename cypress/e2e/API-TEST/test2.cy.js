/// <reference types="cypress" />

describe('My First API Test', function ()  {

    it('My First Test Case', function ()  {

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) => 
        {
        req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'

        req.continue((res) => {

            expect(res.statusCode).to.equal(200)
            
                
            });
        }).as('dummyUrl')
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait('@dummyUrl')

    cy.url().should('include', '/library'); // opsional
    cy.contains(/Books Availability in Rahul Shetty Academy Library/i)
      .should('be.visible');
        
    });
});