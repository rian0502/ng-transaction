import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.currentUserValue) {
    router.navigate(['/dashboard']);
    return false;
  }

  // Jika user BELUM login, izinkan masuk ke halaman login
  return true;
};