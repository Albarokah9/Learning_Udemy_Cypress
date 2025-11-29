import ConfirmationPage from './ConfirmationPage';

class CartPage {
    proceedToCheckout() {
        cy.contains('button', 'Checkout').click();
        return new ConfirmationPage();
    }

    getCartTotal() {
        let sum = 0;
        return cy
            .get('tr td:nth-child(4) strong')
            .each(($el) => {
                const amount = Number($el.text().split(' ')[1].trim());
                sum += amount;
            })
            .then(() => sum);
    }
}

export default CartPage;
