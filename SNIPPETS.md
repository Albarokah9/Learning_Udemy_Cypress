# Cypress Snippets Reference

Dokumentasi ringkas untuk semua VS Code snippets yang tersedia di project ini guna menunjang proses belajar Cypress.

## 📋 Daftar Isi

- [Stuktur Test (Mocha)](#struktur-test-mocha)
- [Cypress Core Commands](#cypress-core-commands)
- [Page Object Model (POM)](#page-object-model-pom)
- [Cucumber BDD](#cucumber-bdd)
- [JSDoc & Project Standard](#jsdoc--project-standard)

---

## Struktur Test (Mocha)

Gunakan snippet ini untuk membuat kerangka test file.

| Prefix | Snippet Name   | Description                                                   |
| :----- | :------------- | :------------------------------------------------------------ |
| `dsb`  | Describe Block | Membuat blok `describe`                                       |
| `it`   | It Block       | Membuat blok `it` (Test Case) dengan comment `// Test Steps:` |
| `bfe`  | BeforeEach     | Membuat block `beforeEach`                                    |

---

## Cypress Core Commands

Shortcut untuk aksi-aksi umum di Cypress.

| Prefix  | Command                 | Description                         |
| :------ | :---------------------- | :---------------------------------- |
| `cyv`   | `cy.visit()`            | Membuka URL                         |
| `cyget` | `cy.get()`              | Mencari elemen berdasarkan selector |
| `cyc`   | `.click()`              | Melakukan klik (chainable)          |
| `cyt`   | `.type()`               | Mengetik teks (chainable)           |
| `cyvis` | `.should('be.visible')` | Assert elemen terlihat              |
| `cys`   | `.should()`             | Assert umum (chainable)             |

---

## Page Object Model (POM)

Snippet khusus untuk membuat Page Object class yang rapi.

| Prefix          | Description                                                       |
| :-------------- | :---------------------------------------------------------------- |
| `cy-page-class` | Template lengkap Page Object class beserta JSDoc standar project. |
| `cy-import`     | Shortcut untuk mengimpor Page Object dari folder `pages`.         |

---

## Cucumber BDD

Gunakan prefix ini saat menulis file step definitions.

| Prefix | Step         |
| :----- | :----------- |
| `giv`  | `Given(...)` |
| `whe`  | `When(...)`  |
| `the`  | `Then(...)`  |

---

## JSDoc & Project Standard

Memastikan code Anda memenuhi aturan dokumentasi project.

| Prefix        | Description                                                     |
| :------------ | :-------------------------------------------------------------- |
| `jsdoc-suite` | Header standar untuk file test (Test Suite, File, Description). |

---

## ⚡ Tips Cepat

- Ketik **prefix** (misal `cyv`) lalu tekan `Tab` untuk menghasilkan code.
- Gunakan `Tab` untuk berpindah antar placeholder (bagian yang disorot).
- Semua snippets JSDoc sudah menyertakan placeholder untuk deskripsi dalam Bahasa Indonesia sesuai rule project.
