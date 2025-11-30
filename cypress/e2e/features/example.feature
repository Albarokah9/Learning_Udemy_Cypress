Feature: Example Feature untuk Testing Cypress Cucumber
  Sebagai seorang tester
  Saya ingin memverifikasi bahwa Cypress Cucumber sudah terkonfigurasi dengan benar
  Sehingga saya dapat menulis test dengan Gherkin syntax

  Scenario: Mengunjungi halaman Google
    Given Saya membuka halaman Google
    When Saya melihat search box
    Then Halaman Google harus tampil dengan benar

  Scenario: Verifikasi Title Google
    Given Saya membuka halaman Google
    Then Title halaman harus mengandung "Google"
