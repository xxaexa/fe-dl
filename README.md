# Aplikasi React CRUD dengan Redux Toolkit dan GitHub API

Aplikasi React ini mengimplementasikan (Create, Read, Update, Delete) dengan dua model data:

1. **Model Pengguna Lokal**: Mengambil data dari **LOCAL STORAGE**, Menggunakan **Redux Toolkit** untuk manajemen state dan menampilkannya dalam aplikasi.
2. **Model Pengguna GitHub**: Mengambil data dari **GitHub API** dan menampilkannya dalam aplikasi Menggunakan **Redux Toolkit** untuk manajemen state.
3. Aplikasi ini memakai **Tailwind CSS** untuk styling dan **Axios** untuk melakukan request ke API.

---

## **Fitur**

1. **CRUD (Create, Read, Update, Delete)**:

   - **Create**: Menambah data.
   - **Read**: Menampilkan data.
   - **Update**: Memperbarui data.
   - **Delete**: Menghapus data.

2. **Menampilkan Data dari API GitHub**:

   - Menampilkan data dari GitHub.

3. **Responsif**:
   - Aplikasi dapat digunakan pada berbagai perangkat..

---

## **Routing**

Aplikasi ini menggunakan **React Router**

- `/` : **Halaman Pengguna** - Halaman data pengguna.
- `/add` : **Tambah Pengguna** - Halaman untuk menambah data.
- `/edit/:id` : **Edit Pengguna** - Halaman untuk Memperbarui data.
- `/github` : **404 Not Found** - Halaman data pengguna dari github.

## Run Project

1. Clone Repository

   ```bash
   git clone https://github.com/username/repository-name.git

   ```

2. Instal

   ```bash
   npm i

   ```

3. Run

   ```bash
   npm run dev
   ```
