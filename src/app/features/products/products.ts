import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products {
  productsList = [
    {
      id: '1',
      name: 'Bibit Ikan Nila Hitam (Ukuran 5-7 cm)',
      price: 250,
      stock: 15000,
    },
    {
      id: '2',
      name: 'Bibit Ikan Lele Sangkuriang (Ukuran 7-9 cm)',
      price: 150,
      stock: 25000,
    },
    {
      id: '3',
      name: 'Pakan Pelet Apung (Protein 30% - 30kg)',
      price: 320000,
      stock: 45,
    },
    {
      id: '4',
      name: 'Pakan Pelet Tenggelam (Protein 28% - 30kg)',
      price: 295000,
      stock: 20,
    },
    {
      id: '5',
      name: 'Probiotik Air Kolam (1 Liter)',
      price: 75000,
      stock: 120,
    },
    {
      id: '6',
      name: 'Vitamin Ikan Cair Plus Asam Amino (500 ml)',
      price: 55000,
      stock: 85,
    },
    {
      id: '7',
      name: 'Jaring Keramba Tancap (4x4x2 Meter)',
      price: 450000,
      stock: 12,
    },
    {
      id: '8',
      name: 'Pompa Air Aerator (Daya 100W)',
      price: 850000,
      stock: 5,
    },
    {
      id: '9',
      name: 'Obat Anti Jamur Ikan (Methylene Blue 100ml)',
      price: 25000,
      stock: 0,
    },
    {
      id: '10',
      name: 'Kapur Pertanian Dolomit (50kg)',
      price: 65000,
      stock: 30,
    },
  ];
}
