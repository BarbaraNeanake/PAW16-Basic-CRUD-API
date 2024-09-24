# 📚 Bookstore API - PAW Group 16

**Anggota Kelompok 16:**
- 👤 **22/503935/TK/55096** Josua Adhi Candra Nugroho
- 👤 **22/494733/TK/54301** Muhammad Aqiil Fauzaan
- 👤 **22/496427/TK/54387** Muhammad Luthfi Attaqi
- 👤 **22/494495/TK/54238** Barbara Neanake Ajiesti
- 👤 **22/500335/TK/54838** Ramadhani Februarrahman

---

## 📖 Deskripsi Proyek

Proyek ini adalah **API CRUD** yang dibuat untuk **Bookstore** sebagai tugas dari mata kuliah **Pengembangan Aplikasi dan Web (PAW)**. API ini memungkinkan pengguna untuk melakukan operasi **Create**, **Read**, **Update**, dan **Delete** (CRUD) pada data buku-buku yang tersedia di toko buku kami.

✨ Proyek ini menggunakan **MongoDB** sebagai database penyimpanan data dan **Express.js** sebagai backend API. Beberapa fitur tambahan seperti **sorting** dan **filtering** juga diimplementasikan untuk memberikan pengalaman pengguna yang lebih baik dalam pencarian buku.

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

Berikut adalah atribut yang digunakan dalam koleksi books di MongoDB untuk Bookstore API:

1. `_id` (ObjectID): ID unik yang dihasilkan secara otomatis oleh MongoDB.
2. `title` (String): Judul buku.
3. `author` (String): Penulis buku.
4. `genre` (String): Genre buku.
5. `price` (Number): Harga buku.
6. `stock` (Number): Jumlah stok buku yang tersedia.
7. `publishedYear` (Number): Tahun publikasi buku.

---

## 📚 Frontend Bookstore
Kami juga telah mengembangkan frontend yang nyaman dan responsif untuk aplikasi Bookstore, sehingga pengguna dapat melakukan CRUD dengan *interface* yang mudah digunakan.

#### 🔑 Login Page
<img src="https://github.com/BarbaraNeanake/PAW16-Basic-CRUD-API/blob/main/loginpage.png" alt="Login Page" width="600"/>

#### 🏠 Homepage
<img src="https://github.com/BarbaraNeanake/PAW16-Basic-CRUD-API/blob/main/homepage.png" alt="Homepage" width="600"/>

#### 📚 Main Page
<img src="https://github.com/BarbaraNeanake/PAW16-Basic-CRUD-API/blob/main/mainpage.png" alt="Main Page" width='600'/>

Frontend ini dibangun menggunakan React.js untuk menampilkan konten secara dinamis dan cepat. Pengguna dapat dengan mudah menambah, menghapus, dan mencari buku secara real-time. Kami juga telah mengintegrasikan sistem login yang memperkuat keamanan dan pengalaman pengguna.

Fitur utama:
- React.js untuk aplikasi single-page yang dinamis.
- Interface yang sederhana dan intuitif untuk operasi CRUD serta adanya Page proses Login dan Registrasi

Dengan perpaduan MongoDB sebagai backend dan React.js sebagai frontend, kami memberikan pengalaman pengguna yang optimal serta menjaga kinerja dan keamanan aplikasi.

## 🛠️ Panduan Penggunaan

### 1. Clone Repository
Untuk memulai, clone repositori ini ke local machine Anda:

```bash
git clone https://github.com/BarbaraNeanake/PAW16-Basic-CRUD-API.git
```

### 2. Install Dependencies
Setelah cloning, navigasikan ke direktori project dan install dependencies dengan menjalankan perintah berikut (di terminal code ataupun frontend):

```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env` di dalam root directory project Code dengan konfigurasi seperti berikut:

```
MONGO_URI=mongodb+srv://PAW16:xRljvFanxLe8zYnl@paw16db.qg8h8.mongodb.net/Book_Store?retryWrites=true&w=majority&appName=PAW16DB
JWTPRIVATEKEY="3c3b6a17fa78e5cd8f6347f748e2f8b60b840167ff0ec8d50dc36cf582957e634e5fddf4e29994f845a3de7c5630de4d79c5463e739480ea55b464f2a649f1a3"
SALT=10
```

### 4. Jalankan Aplikasi
Untuk memulai aplikasi, jalankan perintah berikut di terminal:

```bash
npm start
```

Aplikasi ini akan berjalan di `http://localhost:3000` secara default.

---

## 🗂️ Struktur Proyek

```bash
PAW16-Basic-CRUD-API/
├── Code/
│   ├── src/
│       ├── controllers/    # Logic API untuk backend
│       ├── models/        
│       └── routes/    
│   ├── .env                # File environment frontend
│   ├── config.js   
│   ├── index.js  
│   ├── package.json    
│   └── package-lock.json 
│
├── Frontend/
│   ├── public/       
│   ├── src/
│       ├── components/     # UI untuk frontend
│       ├── App.js          # Main component aplikasi frontend
│       ├── index.js       
│   ├── .env                # File environment frontend
│   ├── package.json        
│   └── package-lock.json  
│
├── README.md               

```

---

_Thank you for visiting our repository. We hope this project is useful and continues to grow_ ✨🚀
