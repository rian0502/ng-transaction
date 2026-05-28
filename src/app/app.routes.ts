import { Routes } from '@angular/router';

import { Users } from './features/users/users';
import { Products } from './features/products/products';
import { ProductForm } from './features/products/product-form/product-form';
import { Dashboard } from './features/dashboard/dashboard';
import { Transactions } from './features/transactions/transactions';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '', 
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'transactions', component: Transactions },
      { path: 'products', component: Products },
      { path: 'products/create', component: ProductForm },
      { path: 'users', component: Users }
    ]
  }
];