# Rangkuman: Cypress Studio AI & `cy.prompt`

> 📖 Sumber resmi: [Cypress Studio AI](https://docs.cypress.io/app/guides/cypress-studio) · [AI Test Generation](https://docs.cypress.io/app/guides/ai-test-generation)  
> 🕐 Diperbarui: Juli 2026 | Versi minimum: **Cypress 15.11.0**

---

## 🎬 Cypress Studio AI

Cypress Studio memungkinkan Anda membuat dan memperluas tes E2E hanya dengan **merekam interaksi nyata di browser** tanpa menulis setiap baris kode secara manual. **Studio AI** menambahkan lapisan kecerdasan buatan di atasnya — AI mengamati perubahan DOM saat Anda berinteraksi dan **secara otomatis merekomendasikan assertion** yang relevan.

### Studio vs Studio AI

| Fitur | Studio (tanpa Cloud) | Studio AI (Cloud wajib) |
|---|---|---|
| Rekam interaksi | ✅ | ✅ |
| Tambah assertion manual | ✅ | ✅ |
| Edit kode tes inline | ✅ | ✅ |
| **Rekomendasi assertion dari AI** | ❌ | ✅ |
| **Review snapshot DOM sebelum/sesudah** | ❌ | ✅ |

### Cara Membuka Studio

Ada **3 cara** untuk membuka Studio:

1.  **Test Baru**: Klik **"New Test"** di spec manapun di Cypress App
2.  **Test yang Ada**: Hover di test di Command Log → klik **"Edit in Studio"**
3.  **Langsung**: Klik tombol **"Studio Beta"** di header panel

### Cara Kerja AI Recommendation

1. AI memunculkan **thinking indicator** saat sedang membuat rekomendasi
2. Rekomendasi berisi **komentar penjelasan** tentang apa yang di-assert
3. Anda bisa **Accept**, **Reject**, atau **Edit** tiap rekomendasi
4. Tersedia tombol **"Accept all"** / **"Reject all"** untuk efisiensi

### Jenis Assertion yang Direkomendasikan AI

- Visibilitas (element visible/hidden)
- Keberadaan elemen (`exist` / `not.exist`)
- Isi teks (text content)
- Jumlah elemen (length)
- Nilai input form, dropdown, dan statusnya
- Atribut elemen (CSS class, aria attributes)
- URL halaman saat ini dan judul halaman

### Selector Priority (Default)

Studio menggunakan urutan ini untuk memilih selector terbaik:

| Prioritas | Selector |
|---|---|
| 1 | `data-cy` |
| 2 | `data-test` |
| 3 | `data-testid` |
| 4 | `data-qa` |
| 5 | `name` |
| 6 | `id` |
| 7 | `class` |
| 8 | `tag` |
| 9 | `attributes` |
| 10 | `nth-child` |

> Gunakan [`Cypress.ElementSelector`](https://docs.cypress.io/api/cypress-api/element-selector-api) API untuk mengkustomisasi urutan ini sesuai kebutuhan proyek Anda.

### Batas Penggunaan (per jam/user)

| Paket | Rekomendasi per jam |
|---|---|
| Free Cloud | 60 |
| Paid Cloud / Free Trial | 300 |

### ⚠️ Batasan & Keterbatasan Studio AI

- Hanya mendukung **E2E Testing** (Component Testing belum didukung)
- **Cucumber-style tests** belum didukung
- Tidak bisa merekam interaksi lintas **multiple origins** (`cy.origin`)
- Tidak mendukung **iFrame** dan **Shadow DOM**
- Membutuhkan Cypress versi minimum **`15.11.0`**
- Halaman yang sangat besar bisa melebihi konteks AI sehingga tidak ada rekomendasi yang dihasilkan

---

## ✨ `cy.prompt` — AI Test Generation

`cy.prompt` adalah perintah Cypress yang memungkinkan Anda menulis tes menggunakan **bahasa alami (natural language)**. Cukup deskripsikan langkah pengujian seperti menjelaskan kepada rekan kerja, dan AI akan mengonversinya menjadi perintah Cypress yang nyata dan dapat dieksekusi.

### Cara Penggunaan Dasar

```javascript
cy.prompt([
    'visit https://rahulshettyacademy.com/AutomationPractice/',
    'click the "Open Tab" link',
    'verify the page title contains "QAClick Academy"',
])
```

### Dua Workflow Utama

#### 1️⃣ Generate Sekali → Commit ke Source Control

Gunakan `cy.prompt` untuk generate tes, lalu **export dan commit kodenya**. AI tidak perlu dipanggil lagi saat runtime.

```javascript
cy.prompt(
    [
        'visit https://example.com/login',
        'type "user@test.com" in the email field',
        'type {{password}} in the password field',
        'click the login button',
        'verify we are redirected to the dashboard',
    ],
    {
        placeholders: { password: 'secret123' },
    }
)
```

**Cocok untuk:**
- Eksekusi tes yang **predictable** dan konsisten
- Tes dengan elemen yang **stabil** (selector tidak sering berubah)
- Proses **PR review** yang terstandar
- CI/CD pipeline yang tidak ingin bergantung pada AI saat runtime

#### 2️⃣ Continuous Self-Healing

Biarkan `cy.prompt` terus berjalan di setiap eksekusi. AI akan **otomatis menyesuaikan selector** jika UI berubah.

```javascript
cy.prompt([
    'visit the product catalog',
    'filter by category "Electronics"',
    'sort by price high to low',
    'verify the product count is 25',
])
```

**Cocok untuk:**
- Aplikasi yang **sedang aktif dikembangkan** (UI sering berubah)
- Mengurangi maintenance manual
- Konten yang **dinamis**

### Menulis Prompt yang Efektif

> **Catatan:** `cy.prompt` dioptimalkan untuk **bahasa Inggris**. Akurasi untuk bahasa lain tidak dijamin.

**Aturan penulisan prompt yang baik:**

- ✅ Gunakan **imperative voice** — mulai dengan kata kerja (`click`, `type`, `verify`, `visit`)
- ✅ Gunakan **URL absolut** saat melakukan visit
- ✅ **Satu aksi per langkah** — jangan gabungkan dua aksi dalam satu string
- ✅ Tambahkan **konteks posisi**: `"click the login button in the header"`
- ❌ Hindari prompt yang samar: `"click button"`, `"go to profile"`, `"check success"`

**Contoh prompt baik vs buruk:**

```javascript
// ✅ Baik — jelas dan deskriptif
cy.prompt([
    'visit https://example.com/login',
    'click the "Edit Profile" button in the profile section',
    'type "John Doe" in the name field',
    'click the "Save Changes" button',
    'verify the success message "Profile updated successfully" appears',
])

// ❌ Buruk — samar dan rawan error
cy.prompt([
    'go to profile',
    'click button',
    'type name',
    'save',
    'check success',
])
```

**Menarget elemen berdasarkan teks:**

| Cara | Hasil | Gunakan ketika |
|---|---|---|
| Teks dalam tanda kutip `"Login"` | `cy.contains("Login")` | Selector tidak stabil, konten yang diuji |
| Teks tanpa tanda kutip `login button` | `cy.get(selector)` | Selector stabil, konten bisa berubah |

### Self-Healing

`cy.prompt` melakukan *self-heal* ketika selector sebuah elemen berubah sejak terakhir kali tes dijalankan.

| Tipe | Keterangan |
|---|---|
| **Self-Healed via Cache** | Element berubah, ditemukan lewat cache *tanpa* memanggil AI |
| **Self-Healed via AI** | Element berubah, AI dipanggil untuk menemukan element baru |

> **Perhatian:** Self-healing bekerja paling baik untuk perubahan yang **jarang dan tidak terduga**. Jika self-healing terpicu setiap kali tes dijalankan, performa akan melambat karena AI terus dipanggil.

### Placeholders (Nilai Dinamis & Sensitif)

Gunakan sintaks `{{namaPlaceholder}}` untuk menjaga cache tetap valid dan agar data sensitif tidak dikirim ke AI model.

```javascript
// Menggunakan placeholder untuk data sensitif
cy.env(['USER_PASSWORD']).then(({ userPassword }) => {
    cy.prompt(
        ['type {{password}} in the password field'],
        { placeholders: { password: userPassword } }
    )
})
```

**Keuntungan Placeholder:**
- ✅ **Cache tetap valid** — nilai berbeda tidak menginvalidasi cache
- ✅ **Substitusi saat runtime** — `{{placeholder}}` diganti dengan nilai nyata saat eksekusi
- ✅ **Data sensitif aman** — nilai placeholder *tidak pernah dikirim ke AI*

### Keamanan & Privasi Data

Field berikut secara **otomatis dikecualikan** nilainya sebelum dikirim ke AI:

- `input[type=password]` — password fields
- Field kartu kredit (card name, number, expiry, CVV, card type)
- `input[type=hidden]` — hidden inputs

*Struktur dan konteks DOM field ini tetap digunakan, hanya nilainya yang dikecualikan.*

### Melihat & Mengekspor Kode yang Digenerate

1. Jalankan tes dengan `cy.prompt` di Cypress App
2. Klik tombol **"Code"** di Command Log di sebelah perintah `cy.prompt`
3. Review kode lengkap yang telah digenerate AI
4. Pilih: **Save ke file** (gantikan `cy.prompt` dengan kode statis) atau **Copy to clipboard**

Untuk mengunduh laporan lengkap semua `cy.prompt` dari satu run:
1. Buka run di **Cypress Cloud** → tab **Properties**
2. Scroll ke bagian **cy.prompt** → klik **Download report**
3. Pilih format: **JSON**, **YAML**, atau **Markdown**

---

## ⚙️ Persyaratan & Pricing

| Fitur | Persyaratan |
|---|---|
| Cypress Studio (tanpa AI) | Cypress App + Sourcemaps aktif |
| Cypress Studio AI | Cypress Cloud + Cypress ≥ `15.11.0` |
| `cy.prompt` | Cypress Cloud + Login / flag `--record` |

- **Free Cloud**: Tersedia, dengan batas 60 rekomendasi/jam (Studio AI)
- **Grace Period `cy.prompt`**: Hingga **1 Agustus 2026**, penggunaan tidak dikenakan biaya

---

## 🔗 Referensi Resmi

- [Cypress Studio AI Docs](https://docs.cypress.io/app/guides/cypress-studio)
- [AI Test Generation (cy.prompt) Docs](https://docs.cypress.io/app/guides/ai-test-generation)
- [cy.prompt API Reference](https://docs.cypress.io/api/commands/prompt)
- [Element Selector API](https://docs.cypress.io/api/cypress-api/element-selector-api)
- [Cypress Cloud Pricing](https://www.cypress.io/pricing)
- [Security & Compliance Cypress](https://www.cypress.io/security)
