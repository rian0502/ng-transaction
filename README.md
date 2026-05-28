# Angular POS Learning Project

Frontend aplikasi Point of Sale (POS) sederhana menggunakan Angular yang dibuat untuk proses belajar fullstack development dan integrasi dengan backend NestJS.

Project ini digunakan sebagai playground untuk mempelajari:

* Angular Standalone Component
* Angular Routing
* Reactive Form
* HTTP Client & REST API Integration
* Authentication & Authorization
* State Management dasar
* Integrasi PostgreSQL melalui NestJS + Prisma ORM
* Struktur aplikasi enterprise sederhana

---

## Tech Stack

### Frontend

* Angular
* TypeScript
* Bootstrap / ng-bootstrap
* RxJS

### Backend (Planned Integration)

* NestJS
* Prisma ORM
* PostgreSQL

---

# Database Schema

Project backend menggunakan Prisma ORM dengan PostgreSQL.

## Entity Relationship Overview

### User

Menyimpan data pengguna aplikasi.

| Field     | Type            |
| --------- | --------------- |
| id        | UUID            |
| name      | String          |
| email     | String          |
| password  | String          |
| role      | ADMIN / CASHIER |
| createdAt | DateTime        |
| updatedAt | DateTime        |

---

### Product

Menyimpan data produk.

| Field     | Type     |
| --------- | -------- |
| id        | UUID     |
| name      | String   |
| price     | Integer  |
| stock     | Integer  |
| createdAt | DateTime |
| updatedAt | DateTime |

---

### TransactionHeader

Menyimpan header transaksi.

| Field           | Type     |
| --------------- | -------- |
| id              | UUID     |
| userId          | UUID     |
| total           | Integer  |
| transactionDate | DateTime |

---

### TransactionDetail

Menyimpan detail item transaksi.

| Field         | Type    |
| ------------- | ------- |
| id            | UUID    |
| transactionId | UUID    |
| productId     | UUID    |
| qty           | Integer |
| price         | Integer |

---

# Planned Features

## Authentication

* Login
* JWT Authentication
* Role-based Authorization

## Product Management

* Create Product
* Edit Product
* Delete Product
* Product List

## Transaction

* Create Transaction
* Cart System
* Transaction History
* Transaction Detail

## Dashboard

* Sales Summary
* Total Products
* Total Transactions

---

# Project Structure

```bash
src/
├── app/
│   ├── core/
│   ├── shared/
│   ├── features/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── products/
│   │   └── transactions/
│   ├── layouts/
│   └── services/
```

---

# Getting Started

## Clone Repository

```bash
git clone <your-repository-url>
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
ng serve
```

Buka browser:

```bash
http://localhost:4200
```

---

# Backend Integration

Frontend ini dirancang untuk terhubung dengan REST API dari NestJS.

Contoh endpoint:

```http
GET /products
POST /products
GET /transactions
POST /auth/login
```

---

# Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}

datasource db {
  provider = "postgresql"
  schemas  = ["nest"]
}
```

---

# Learning Goals

Project ini dibuat sebagai media belajar untuk:

* Clean Architecture Frontend
* Fullstack Monorepo Concept
* Enterprise Folder Structure
* RESTful API Integration
* Authentication Flow
* Angular Best Practice
* Prisma ORM
* PostgreSQL Relation

---

# Author

Developed by Rian

---

# Notes

Project ini masih dalam tahap pengembangan dan akan terus di-update seiring proses belajar Angular dan NestJS.
