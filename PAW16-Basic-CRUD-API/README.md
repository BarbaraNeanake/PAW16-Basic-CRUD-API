# 📚 Bookstore API - PAW16 Basic CRUD API

**Anggota Kelompok 16**:
- 👤 **22/503935/TK/55096** Josua Adhi Candra Nugroho
- 👤 **22/494733/TK/54301** Muhammad Aqiil Fauzaan
- 👤 **22/496427/TK/54387** Muhammad Luthfi Attaqi
- 👤 **22/494495/TK/54238** Barbara Neanake Ajiesti
- 👤 **22/500335/TK/54838** Ramadhani Februarrahman

---

## 📖 Deskripsi Proyek

Proyek ini adalah **API CRUD** yang dibuat untuk **PAW Bookstore** sebagai tugas dari mata kuliah **Pengembangan Aplikasi dan Web (PAW)**. API ini memungkinkan pengguna untuk melakukan operasi **Create**, **Read**, **Update**, dan **Delete** (CRUD) pada data buku-buku yang tersedia di toko buku kami. 

✨ Proyek ini menggunakan **MongoDB** sebagai database penyimpanan data dan **Express.js** sebagai backend API. Beberapa fitur tambahan seperti **sorting** dan **filtering** juga diimplementasikan untuk pengalaman pengguna yang lebih baik dalam pencarian buku.

---

## 🎯 Fitur Utama

- 📋 **CRUD API**: Operasi Create, Read, Update, Delete untuk data buku.
- 🔍 **Sorting & Filtering**: Fitur filter dan sorting buku berdasarkan judul, pengarang, dan harga.
- 💾 **MongoDB**: Database untuk penyimpanan data buku.
- ⚙️ **Express.js**: Backend framework untuk API.
- 🔐 **Keamanan JWT**: Token autentikasi untuk pengguna.
- 💡 **Git Workflow yang Baik**: Commit message yang jelas, penggunaan branch, dan PR untuk merge yang baik.

---

## 📊 Atribut MongoDB untuk Bookstore

Berikut adalah atribut yang digunakan dalam koleksi `books` di MongoDB untuk **Bookstore API**:

1. **_id** (ObjectID): ID unik yang dihasilkan secara otomatis oleh MongoDB.
2. **title** (String): Judul buku.
3. **author** (String): Penulis buku.
4. **genre** (String): Genre buku.
5. **price** (Number): Harga buku.
6. **stock** (Number): Jumlah stok buku yang tersedia.
7. **publishedYear** (Number): Tahun publikasi buku.

---

## 🗂️ Struktur Proyek

```bash
PAW16-Basic-CRUD-API/
├── src/
│   ├── config/         # Konfigurasi database & environment
│   ├── controllers/    # Logika bisnis API
│   ├── middlewares/    # Middleware untuk validasi dan keamanan
│   ├── models/         # Skema dan model MongoDB
│   └── routes/         # Rute untuk API
├── .gitignore          # File untuk mengabaikan file tertentu di Git
├── package.json        # Informasi dan dependencies proyek
├── package-lock.json   # Versi dependencies yang terkunci
└── README.md           # Dokumentasi proyek
```

---


*Thank you for visiting our repository. We hope this project is useful and continues to grow.* ✨🚀
