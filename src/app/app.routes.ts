import { Routes } from '@angular/router';

import { Users } from './features/users/users';
import { Login } from './features/auth/login/login';
import { roleGuard } from './core/guards/role-guard';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { Products } from './features/products/products';
import { Dashboard } from './features/dashboard/dashboard';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Transactions } from './features/transactions/transactions';
import { ProductForm } from './features/products/product-form/product-form';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    canActivate: [guestGuard],
    children: [
      { path: 'login', component: Login },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'transactions', component: Transactions },
      { path: 'products', component: Products },
      { path: 'products/create', component: ProductForm },
      { path: 'products/edit/:id', component: ProductForm },
      {
        path: 'users',
        component: Users,
        canActivate: [roleGuard],
        data: { roles: ['ADMIN'] }
      }
    ]
  },
  { path: '**', redirectTo: 'auth/login' }
];