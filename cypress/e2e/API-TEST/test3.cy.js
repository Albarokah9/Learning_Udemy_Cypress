/// <reference types="cypress" />

describe('My First API Test',  () => {

    it('My First Test Case', () => {
        cy.request('POST','https://216.10.245.166/Library/Addbook.php', {

        "name":"Learn Appium Automation with Java",
        "isbn":"bcd",
        "aisle":"22s7",
        "author":"John foe"
        }).then((response) => {
            expect(response.body).to.have.property('Msg','successfully added')
            expect(response.status).to.eq(200)
        });       
        });
     });