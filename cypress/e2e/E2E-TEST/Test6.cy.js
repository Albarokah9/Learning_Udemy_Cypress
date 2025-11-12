/// <reference types="cypress" />
//
describe('Table Validation Test', () => {
    it('Test case for validating table data', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        // Table Validation
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            // Check if the text includes 'Python'
            const text = $el.text();
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)')
                    .eq(index)
                    .next()
                    .then(function (price) {
                        // Extract and assert the price
                        const priceText = price.text();
                        expect(priceText).to.equal('25');
                    });
            }
        });
    });
});
