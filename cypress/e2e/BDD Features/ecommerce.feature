# language: id
Fitur: Validasi Pembelian Produk E-commerce
  Sebagai pembeli online
  Saya ingin dapat berbelanja dan menyelesaikan pembayaran
  Sehingga saya dapat menerima produk yang saya pesan

  Dasar:
    Ketika Saya membuka aplikasi e-commerce
    Dan Saya login dengan kredensial berikut:
      | username           | password |
      | rahulshettyacademy | learning |

  @Regression
  Skenario: Berhasil membeli produk dengan total harga sesuai budget
    Maka Saya melihat halaman katalog produk dengan 4 produk tersedia
    Ketika Saya menambahkan produk "Nokia Edge" ke keranjang
    Dan Saya menambahkan satu produk lagi ke keranjang
    Dan Saya membuka halaman keranjang belanja
    Maka Total harga keranjang harus kurang dari 200000
    Ketika Saya melanjutkan ke halaman pembayaran
    Dan Saya menyetujui syarat dan ketentuan
    Dan Saya mengirim pesanan ke negara "Indonesia"
    Maka Saya melihat pesan konfirmasi "Success"
