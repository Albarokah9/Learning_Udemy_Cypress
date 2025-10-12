/// <reference types="cypress" />

// Membuat suite test dengan nama "My First API Test"
describe('My First API Test', function () {
    // Membuat 1 test case di dalam suite
    it('My First Test Case', function () {
        // 1️⃣ Kunjungi halaman web utama aplikasi yang akan diuji
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        // 2️⃣ Intercept (menangkap dan memanipulasi) request API GET
        // ke endpoint berikut: /Library/GetBook.php?AuthorName=shetty
        // Tujuannya: mengganti response asli dari server dengan response buatan (mock)
        cy.intercept(
            {
                method: 'GET', // Jenis method HTTP yang diintercept
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', // URL target
            },
            {
                // Response palsu (mocked response)
                statusCode: 200, // status HTTP 200 = sukses
                body: [
                    {
                        book_name: 'RestAssured with Java',
                        isbn: 'RSU',
                        aisle: '2301',
                    },
                ],
            }
        ).as('bookretrievals'); // 3️⃣ Memberi alias (@bookretrievals) agar mudah dipanggil di cy.wait()

        // 4️⃣ Klik tombol “Get Book” pada halaman web
        // Aksi ini akan memicu request GET yang kita intercept di atas
        cy.get('button[class="btn btn-primary"]').click();

        // 5️⃣ Tunggu hingga request API (alias @bookretrievals) selesai
        // Ini memastikan UI tidak diperiksa sebelum data dimuat
        cy.wait('@bookretrievals').then(({ response }) => {
            // validasi API
            expect(response.statusCode).to.eq(200);

            // validasi UI dengan data dari API
            cy.get('tr').should('have.length', response.body.length + 1);
        });

        // 6️⃣ Verifikasi (assertion) bahwa elemen <p> memiliki teks yang diharapkan
        // Berdasarkan data mock (hanya 1 buku), UI seharusnya menampilkan pesan berikut:
        cy.get('p').should('have.text', 'Oops only 1 Book available');

        // ✅ Jika semua langkah berhasil, test akan berstatus "passed"
    });
});
