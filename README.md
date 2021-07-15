# Natrue

## About
### EN
Natrue is a simple fictional e-commerce web project that focuses on selling "nature" goods such as vegetables, fruit and others. Natrue is built using React.js for the frontend and Node.js for the backend. For the database, Natrue uses MySQL (RDBMS) and uses Sequelize as ORM.

### ID
Natrue merupakan proyek web e-commerce fiktif sederhana yang berfokus pada menjual barang-barang "alam" seperti sayur, buah dan yang lainnya. Natrue dibuat menggunakan React.js untuk frontend dan Node.js untuk backend. Untuk database, Natrue menggunakan MySQL (RDBMS) dan menggunakan Sequelize sebagai ORM.

## Project Specification
### Frontend:
- React.js
### Backend:
- Node.js
- MySQL (Database)
- Sequelize (ORM)

## Installation
### Database (Backend)
- Dari root, masuk ke folder `database`

      cd database
    
- Import `natrue_db.sql` database (MySQL)

### API (Backend)
#### Install API

- Dari root, masuk ke folder `api`

      cd api
      
- Install API

      npm i
    
#### Setting database connection

- Masuk ke folder `dbCon`

      cd dbCon
      
- Buka file `index.js`, lihat `line 3`, ubah `"username"` dan `"password"` menjadi username dan password MySQL anda

#### Run the API

- Keluar dari folder `dbCon`, kemudian jalankan API

      cd ..
      
- Jalankan API

      node .

### Client (Frontend)

- Dari root, masuk ke folder `client`

      cd client
      
- Install Client

      npm i

- Start

      npm start

## Screenshot
### Landing Page
![Landing Page](./screenshot/1.jpg)
### Product Feed Page
![Product Feed Page](./screenshot/2.jpg)
### Product Detail Page
![Product Detail Page](./screenshot/3.jpg)
### Cart Page
![Cart Page](./screenshot/4.jpg)
### Transaction Page
![Transaction Page](./screenshot/5.jpg)

## Important Notice
### EN
NATRUE IS JUST A FICTIONAL E-COMMERCE THAT I CREATED FOR MY PERSONAL PORTFOLIO. ANYTHING THAT IS STATED "FOR SALE" HERE IS NOT ACTUALLY SOLD BY ME. THE PRICES OF GOODS LISTED MAY ALSO DIFFER FROM THE ACTUAL MARKET PRICES.

### ID
NATRUE HANYALAH E-COMMERCE FIKTIF YANG SAYA BUAT UNTUK PORTFOLIO PRIBADI SAYA. SEMUA BARANG YANG DINYATAKAN "DIJUAL" DI SINI TIDAK BENAR-BENAR SAYA JUAL. HARGA BARANG YANG TERTERA JUGA MUNGKIN BERBEDA DENGAN HARGA PASAR SEBENARNYA.

## License
[SEE LICENSE](https://github.com/luthfirobbaniy/Natrue/blob/main/LICENSE)
