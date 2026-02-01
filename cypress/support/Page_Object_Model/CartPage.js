import ConfirmationPage from './ConfirmationPage';

/**
 * @class CartPage
 * @extends BasePage
 */
class CartPage {
    /**
     * Melanjutkan proses ke halaman konfirmasi (checkout).
     * @returns {ConfirmationPage} Instance baru dari ConfirmationPage
     */
    proceedToCheckout() {
        cy.contains('button', 'Checkout').click();
        return new ConfirmationPage();
    }

    /**
     * Menghitung total harga semua produk yang ada di keranjang.
     * @returns {Cypress.Chainable<number>} Total harga produk
     */
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
