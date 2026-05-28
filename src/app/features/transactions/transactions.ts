import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions {
  transactionList = [
    { id: 'TRX-001', date: '2026-05-25', item: 'Pakan Pelet Apung (50kg)', type: 'Keluar', amount: 2500000, status: 'Selesai' },
    { id: 'TRX-002', date: '2026-05-26', item: 'Bibit Ikan Nila Hitam', type: 'Masuk', amount: 1200000, status: 'Selesai' },
    { id: 'TRX-003', date: '2026-05-27', item: 'Vitamin & Probiotik Air', type: 'Keluar', amount: 450000, status: 'Pending' }
  ]
}
