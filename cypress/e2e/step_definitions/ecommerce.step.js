const {
    Given,
    When,
    Then,
    Before,
} = require('@badeball/cypress-cucumber-preprocessor');
import HomePage from '../../support/Page_Object_Model/HomePage';

/**
 * Step Definitions untuk Ecommerce Feature
 * Mengkonversi Test1.cy.js ke BDD Cucumber format
 * Mendukung Bahasa Indonesia untuk non-technical team
 */

// Shared context untuk menyimpan page objects dan data
let homePage;
let productPage;
let cartPage;
let confirmationPage;

// Before hook untuk initialize page objects
Before(function () {
    homePage = new HomePage();
});

/**
 * ========================================
 * STEP DEFINITIONS - BAHASA INDONESIA
 * ========================================
 */

/**
 * KETIKA Steps - Setup dan Actions
 */
Given('Saya membuka aplikasi e-commerce', () => {
    homePage.goTo();
});

Given(
    'Saya login dengan username {string} dan password {string}',
    (username, password) => {
        productPage = homePage.login(username, password);
    }
);

/**
 * Login dengan Data Table
 * Digunakan ketika ingin mengirimkan multiple data atau structurized data di Gherkin
 *
 * @example
 * Dan Saya login dengan kredensial berikut:
 *   | username           | password |
 *   | rahulshettyacademy | learning |
 *
 * @param {DataTable} dataTable - Object tabel dari Cucumber
 */
Given('Saya login dengan kredensial berikut:', (dataTable) => {
    // Mengubah table menjadi Array of Objects
    // Contoh: [{ username: 'rahulshettyacademy', password: 'learning' }]
    const data = dataTable.hashes();

    data.forEach((row) => {
        productPage = homePage.login(row.username, row.password);
    });
});

When('Saya menambahkan produk {string} ke keranjang', (productName) => {
    productPage.addProductByName(productName);
});

When('Saya menambahkan satu produk lagi ke keranjang', () => {
    productPage.addFirstProduct();
});

When('Saya membuka halaman keranjang belanja', () => {
    cartPage = productPage.goToCart();
});

When('Saya melanjutkan ke halaman pembayaran', () => {
    confirmationPage = cartPage.proceedToCheckout();
});

When('Saya menyetujui syarat dan ketentuan', () => {
    confirmationPage.checkTermsAndConditions();
});

When('Saya mengirim pesanan ke negara {string}', (country) => {
    confirmationPage.submitOrder(country);
});

/**
 * MAKA Steps - Verifikasi/Assertions
 */
Then(
    'Saya melihat halaman katalog produk dengan {int} produk tersedia',
    (productCount) => {
        homePage.verifyLoginSuccess();
        productPage.verifyPageLoaded();
        productPage.getProductCards().should('have.length', productCount);
    }
);

Then('Total harga keranjang harus kurang dari {int}', (priceLimit) => {
    cartPage.getCartTotal().then((sum) => {
        expect(sum).to.be.lessThan(priceLimit);
    });
});

Then('Saya melihat pesan konfirmasi {string}', (expectedMessage) => {
    confirmationPage.getSuccessAlert().should('contain.text', expectedMessage);
});

/**
 * ========================================
 * STEP DEFINITIONS - ENGLISH (BACKWARD COMPATIBILITY)
 * ========================================
 */

/**
 * GIVEN Steps - Setup dan navigasi awal
 */
Given('I open the Ecommerce application', () => {
    homePage.goTo();
});

Given('I am on Ecommerce Page', () => {
    homePage.goTo();
});

/**
 * WHEN Steps - Actions/Interaksi user
 */
When(
    'I login with username {string} and password {string}',
    (username, password) => {
        productPage = homePage.login(username, password);
    }
);

When('I login to the application', function () {
    // Menggunakan data dari fixture
    cy.fixture('example').then((data) => {
        productPage = homePage.login(data.username, data.password);
        // Simpan data untuk step berikutnya
        this.testData = data;
    });
});

When('I add product {string} to cart', (productName) => {
    productPage.addProductByName(productName);
});

When('I add the first product to cart', () => {
    productPage.addFirstProduct();
});

When('I add items to Cart and checkout', function () {
    // Menggunakan data dari fixture yang sudah di-load
    productPage.addProductByName(this.testData.productName);
    productPage.addFirstProduct();
});

When('I go to cart page', () => {
    cartPage = productPage.goToCart();
});

When('I proceed to checkout', () => {
    confirmationPage = cartPage.proceedToCheckout();
});

When('I accept terms and conditions', () => {
    confirmationPage.checkTermsAndConditions();
});

When('I submit order for country {string}', (country) => {
    confirmationPage.submitOrder(country);
});

/**
 * THEN Steps - Verifikasi/Assertions
 */
Then('I should see the product page with {int} products', (productCount) => {
    homePage.verifyLoginSuccess();
    productPage.verifyPageLoaded();
    productPage.getProductCards().should('have.length', productCount);
});

Then('The cart total should be less than {int}', (priceLimit) => {
    cartPage.getCartTotal().then((sum) => {
        expect(sum).to.be.lessThan(priceLimit);
    });
});

Then('Validation the total price limit', () => {
    const PRICE_LIMIT = 200000;
    cartPage = productPage.goToCart();
    cartPage.getCartTotal().then((sum) => {
        expect(sum).to.be.lessThan(PRICE_LIMIT);
    });
});

Then('I should see success message containing {string}', (expectedMessage) => {
    confirmationPage.getSuccessAlert().should('contain.text', expectedMessage);
});

Then('Select the country submit and verify Thankyou', function () {
    confirmationPage = cartPage.proceedToCheckout();
    confirmationPage.checkTermsAndConditions();
    confirmationPage.submitOrder(this.testData.country);
    confirmationPage.getSuccessAlert().should('contain.text', 'Success');
});
