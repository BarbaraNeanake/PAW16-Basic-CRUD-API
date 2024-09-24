# 📚 Bookstore API - PAW Group 16


<img src="https://github.com/BarbaraNeanake/PAW16-Basic-CRUD-API/blob/494495/YEY.png" width="800"/>

**Anggota Kelompok 16:**
- 👤 **22/503935/TK/55096** Josua Adhi Candra Nugroho
- 👤 **22/494733/TK/54301** Muhammad Aqiil Fauzaan
- 👤 **22/496427/TK/54387** Muhammad Luthfi Attaqi
- 👤 **22/494495/TK/54238** Barbara Neanake Ajiesti
- 👤 **22/500335/TK/54838** Ramadhani Februarrahman

---


## 📖 Deskripsi Proyek

Proyek ini adalah **API CRUD** yang dibuat untuk **Bookstore** sebagai tugas dari mata kuliah **Pengembangan Aplikasi dan Web (PAW)**. API ini memungkinkan pengguna untuk melakukan operasi **Create**, **Read**, **Update**, dan **Delete** (CRUD) pada data buku-buku yang ada pada database kami. Proyek ini juga didukung dengan adanya fitur login dan register untuk authentikasinya.

✨ Proyek ini menggunakan **MongoDB** sebagai database penyimpanan data dan **Express.js** sebagai backend API. Beberapa fitur tambahan seperti **sorting**, **filtering**, **pagination** juga diimplementasikan untuk pengalaman pengguna yang lebih baik dalam pencarian buku.

---

## 🎯 Fitur Utama

- **CRUD API**: Operasi Create, Read, Update, Delete untuk data buku.
- **Sorting**: Fitur sorting buku berdasarkan harga dan tahun terbit.
- **Filtering**: Fitur filtering buku berdasarkan kategori yang tersedia.
- **SearchBar** : Fitur searching buku berdasarkan judul buku yang tersedia.
- **MongoDB**: Database untuk penyimpanan data buku.
- **Express.js**: Backend framework untuk API.
- **Keamanan JWT**: Token autentikasi untuk pengguna.

---

## 📊 Atribut MongoDB untuk Bookstore

Berikut adalah atribut yang digunakan dalam koleksi books di MongoDB untuk Bookstore API:

1. **_id** (ObjectID): ID unik yang dihasilkan secara otomatis oleh MongoDB.
2. **title** (String): Judul buku.
3. **author** (Array): Penulis buku.
4. **category** (Array): Category buku.
5. **price** (Double): Harga buku.
6. **year** (Int): Tahun publikasi buku.
7. **publishedDate** (Number): Tanggal publikasi buku.
8. **image** (String) : Sampul dari masing-masing buku.
9. **description** (String) : Deskripsi dari masing-masing buku.

---

## 📚 Frontend Bookstore
Kami juga telah mengembangkan frontend yang nyaman untuk aplikasi Bookstore, sehingga pengguna dapat melakukan CRUD dengan *interface* yang mudah digunakan.

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
Setelah cloning, navigasikan ke direktori project **Code** dan **Frontend**, kemudian install dependencies dengan menjalankan perintah berikut (untuk keduanya):

```bash
npm install
```

### 3. Setup Environment Variables
#### Backend (Code)
Buat file `.env` di dalam root directory project **Code** dengan konfigurasi seperti berikut:

```

MONGO_URI=<your_mongo_db_connection_string>
JWTPRIVATEKEY=<your_jwt_private_key>
SALT=<your_salt_value>

```

#### Frontend
Buat file `.env` di dalam root directory project **Frontend** dengan konfigurasi berikut:

```
REACT_APP_API_URL=http://localhost:5000
```

### 4. Jalankan Aplikasi
Untuk memulai aplikasi backend dan frontend, jalankan perintah berikut di terminal:

#### Backend (Code):
```bash
npm start
```
#### Frontend:
```bash
npm start
```

Aplikasi ini akan berjalan di `http://localhost:3000` secara default untuk frontend dan backend di `http://localhost:5000`.

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
## 📄 Dokumentasi dan Video Demo

Untuk dokumentasi proyek dan video demo CRUD, silakan kunjungi link [bit.ly/PAW_16](bit.ly/PAW_16) atau click:

[![PAW16 Dokumentasi](https://img.shields.io/badge/Documentation-PAW_16-blue)](https://bit.ly/PAW_16)

---

_Thank you for visiting our repository. We hope this project is useful and continues to grow_ ✨🚀
