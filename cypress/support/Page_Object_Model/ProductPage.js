import CartPage from '../../support/Page_Object_Model/CartPage';

class ProductPage {
    // Validasi bahwa halaman Shop telah dimuat dengan benar
    pageValidation() {
        cy.contains('Shop Name').should('be.visible');
    }
    // Mendapatkan seluruh card produk yang tampil di halaman
    getCardCount() {
        return cy.get('app-card');
    }
    // Memilih produk berdasarkan nama, lalu menekan tombol Add
    selectProduct(productName) {
        cy.get('app-card')
            .should('be.visible')
            .filter(`:contains("${productName}")`)
            .then(($element) => {
                // Pastikan hanya satu produk yang match dengan nama
                cy.wrap($element).should('have.length', 1);

                // Klik tombol Add untuk menambahkan ke cart
                cy.wrap($element).contains('button', 'Add').click();
            });
    }
    // Menambahkan item pertama dalam list sebagai tambahan
    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click();
    }
    // Navigasi ke halaman Cart (Checkout summary)
    goToCart() {
        cy.contains('a', 'Checkout').click();
        return new CartPage();
    }
}

export default ProductPage;
