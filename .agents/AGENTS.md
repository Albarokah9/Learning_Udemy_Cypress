# Project-Scoped Agent Rules

Dokumen ini berisi aturan dan batasan perilaku yang WAJIB diikuti oleh seluruh Agen AI yang bekerja di proyek ini.

## Kontrol Eksekusi Skrip & Perintah Terminal

1.  **Dilarang Menjalankan Script Secara Prematur:**
    Agen **TIDAK BOLEH** menjalankan perintah terminal yang mengeksekusi pengujian (seperti `npx cypress run`, `npm run ...`, atau perintah eksekusi lainnya) secara otomatis tanpa persetujuan eksplisit dari pengguna.
2.  **Konfirmasi Sebelum Eksekusi:**
    Setiap kali agen ingin memverifikasi kode atau menjalankan pengujian, agen wajib mengusulkan rencana eksekusi terlebih dahulu, lalu berhenti dan menunggu perintah persetujuan dari pengguna seperti kalimat **"go ahead"** atau **"execute"**.
3.  **Instalasi Dependensi:**
    Agen tidak boleh memodifikasi dependensi atau menjalankan instalasi npm tanpa izin atau tanpa memaparkan konflik dependensi terlebih dahulu kepada pengguna.
