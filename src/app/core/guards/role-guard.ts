import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.currentUserValue;

  if (!user) {
    router.navigate(['/auth/login']);
    return false;
  }

  const expectedRoles: string[] = route.data?.['roles'] || [];

  if (expectedRoles.length === 0 || expectedRoles.includes(user.role)) {
    return true;
  } else {
    alert('Akses Ditolak! Anda tidak memiliki otoritas untuk halaman ini.');
    router.navigate(['/dashboard']);
    return false;
  }
};