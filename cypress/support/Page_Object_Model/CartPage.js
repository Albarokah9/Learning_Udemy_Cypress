import ConfirmationPage from '../../support/Page_Object_Model/ConfirmationPage';

class CartPage {
    // Klik tombol Checkout pada halaman cart untuk menuju halaman konfirmasi
    checkoutItems() {
        cy.contains('button', 'Checkout').click();
        return new ConfirmationPage();
    }
    // Menghitung total harga produk yang ada di tabel cart
    sumOfProducts() {
        let sum = 0;

        return cy
            .get('tr td:nth-child(4) strong')
            .each(($el) => {
                // Parse nilai harga dari UI menjadi number
                const amount = Number($el.text().split(' ')[1].trim());
                // Akumulasi harga produk
                sum = sum + amount;
            })
            .then(() => {
                // Mengembalikan nilai total harga untuk dilakukan assertion
                return sum;
            });
    }
}

export default CartPage;
