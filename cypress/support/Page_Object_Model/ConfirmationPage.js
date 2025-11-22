// Page Object Model untuk halaman konfirmasi pesanan (Confirmation Page)
class ConfirmationPage {
    // Klik checkbox syarat & ketentuan sebelum submit order
    klikCheckbox() {
        cy.get('label[for="checkbox2"]')
            .scrollIntoView() // Pastikan checkbox berada dalam viewport
            .should('be.visible') // Verifikasi label checkbox tampil di layar
            .click('topLeft'); // Klik bagian kiri atas untuk mencentang checkbox
    }
    // Mengisi detail country lalu submit form menggunakan custom command
    submitFromDetails(country) {
        cy.submitFormDetails(country); // Custom command: ketik negara, pilih suggestion, klik submit
    }
    // Mengambil elemen pesan alert sukses setelah order berhasil
    getAlertMessage() {
        return cy.get('.alert-success'); // Kembalikan elemen alert untuk assertion di test
    }
}

export default ConfirmationPage;
