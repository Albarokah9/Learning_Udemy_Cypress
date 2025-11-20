/// <reference types="cypress" />
// Import Page Object Model dari masing-masing halaman
import ConfirmationPage from '../../support/Page_Object_Model/ConfirmationPage';
import HomePage from '../../support/Page_Object_Model/HomePage';
import ProductPage from '../../support/Page_Object_Model/ProductPage';

/**
 * @description End-to-end test untuk memverifikasi proses submit order
 * mulai dari login, memilih produk, checkout, hingga konfirmasi pesanan.
 */
describe('End to End ecommers Test', function () {
    before(function () {
        // Load test data dari fixture dan simpan ke this.data
        cy.fixture('example').then((data) => {
            this.data = data;
            // Inisialisasi HomePage sebagai entry point aplikasi
            this.homePage = new HomePage();
        });
    });
    it('Submit Order', function () {
        // Simpan nama produk yang akan dipilih dari data fixture
        const productName = this.data.productName;
        // STEP 1: Buka halaman utama aplikasi
        this.homePage.goTo();
        // Debug username & password yang akan digunakan login
        cy.log(this.data.username, this.data.password);
        // STEP 2: Lakukan login dan dapatkan object ProductPage untuk melanjutkan flow
        const productPage = this.homePage.login(
            this.data.username,
            this.data.password
        );
        // STEP 3: Verifikasi bahwa user berhasil dialihkan ke halaman Shop
        this.homePage.VerifyLoginSuccess();
        // STEP 4: Validasi halaman product sudah tampil
        productPage.pageValidation();
        // STEP 5: Pastikan jumlah card produk sesuai ekspektasi
        productPage.getCardCount().should('have.length', 4);
        // STEP 6: Tambahkan produk tertentu ke cart menggunakan nama produk
        productPage.selectProduct(productName);
        // STEP 7: Tambahkan produk pertama (opsional, sesuai skenario awal)
        productPage.selectFirstProduct();
        // STEP 8: Navigasi ke halaman Cart dan inisialisasi CartPage
        const cartPage = productPage.goToCart();
        // STEP 9: Hitung total harga semua produk di cart lalu lakukan validasi batas harga
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000);
        });
        // STEP 10: Klik tombol Checkout untuk menuju halaman konfirmasi
        const confirmationPage = cartPage.checkoutItems();
        // STEP 11: Centang checkbox syarat dan ketentuan
        confirmationPage.klikCheckbox();
        // STEP 12: Isi form detail pengiriman (country) lalu submit order
        confirmationPage.submitFromDetails(this.data.country);
        // STEP 13: Verifikasi pesan sukses muncul setelah order berhasil
        confirmationPage.getAlertMessage().should('contain.text', 'Success');
    });
});
