import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  summary = {
    totalTransactions: 3000,
    totalProducts: 10,
    totalUsers: 1387
  }
}
