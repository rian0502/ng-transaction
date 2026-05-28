import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})


export class Users {
  usersList = [
    {
      id: 'd9b2d63d-a233-4123-8478-312739a8bc41',
      name: 'Budi Santoso',
      email: 'budi.admin@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'ADMIN',
      createdAt: '2026-01-15T08:30:00.000Z',
      updatedAt: '2026-01-15T08:30:00.000Z'
    },
    {
      id: 'f8a1c3e5-79a4-4b12-9c44-51382a9dbf12',
      name: 'Siti Aminah',
      email: 'siti.kasir@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'CASHIER',
      createdAt: '2026-02-10T09:15:20.000Z',
      updatedAt: '2026-02-12T14:20:00.000Z'
    },
    {
      id: 'e7b9f84a-32c1-48d9-a472-18493cf82a67',
      name: 'Andi Wijaya',
      email: 'andi.w@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'CASHIER',
      createdAt: '2026-02-20T11:45:00.000Z',
      updatedAt: '2026-02-20T11:45:00.000Z'
    },
    {
      id: 'c5d4e3f2-1a2b-3c4d-5e6f-7a8b9c0d1e2f',
      name: 'Rina Melati',
      email: 'rina.admin@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'ADMIN',
      createdAt: '2026-03-01T07:10:10.000Z',
      updatedAt: '2026-03-05T16:05:30.000Z'
    },
    {
      id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
      name: 'Joko Prabowo',
      email: 'joko.p@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'CASHIER',
      createdAt: '2026-03-15T13:25:40.000Z',
      updatedAt: '2026-03-15T13:25:40.000Z'
    },
    {
      id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
      name: 'Ayu Lestari',
      email: 'ayu.lestari@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'CASHIER',
      createdAt: '2026-04-02T10:50:00.000Z',
      updatedAt: '2026-04-10T08:15:00.000Z'
    },
    {
      id: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
      name: 'Dedi Kusuma',
      email: 'dedi.k@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'ADMIN',
      createdAt: '2026-04-25T14:30:00.000Z',
      updatedAt: '2026-04-25T14:30:00.000Z'
    },
    {
      id: 'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
      name: 'Nia Ramadhani',
      email: 'nia.r@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'CASHIER',
      createdAt: '2026-05-05T09:05:15.000Z',
      updatedAt: '2026-05-05T09:05:15.000Z'
    },
    {
      id: 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
      name: 'Rudi Hermawan',
      email: 'rudi.h@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'CASHIER',
      createdAt: '2026-05-12T16:40:20.000Z',
      updatedAt: '2026-05-14T11:20:00.000Z'
    },
    {
      id: 'f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c',
      name: 'Maya Indah',
      email: 'maya.i@buanakarsa.com',
      password: '$2b$10$dummyhashedpassword123456789',
      role: 'CASHIER',
      createdAt: '2026-05-20T08:00:00.000Z',
      updatedAt: '2026-05-20T08:00:00.000Z'
    }
  ];
}
