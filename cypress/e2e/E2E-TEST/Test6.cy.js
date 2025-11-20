/// <reference types="cypress" />
// 
describe('Table Validation Test', () => {
    it('Test case for validating table data', () => {
        // Visit the practice page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        // Iterate each cell in 2nd column of table
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            // Store text of current cell
            const text = $el.text();
            // Check if cell text contains 'Python'
            if (text.includes('Python')) {
                // Get next sibling cell (price value) of matched row
                cy.get('tr td:nth-child(2)')
                    .eq(index)
                    .next()
                    .then(function (price) {
                        // Extract price text
                        const priceText = price.text();
                        // Assert price equals '25'
                        expect(priceText).to.equal('25');
                    });
            }
        });
    });
});
