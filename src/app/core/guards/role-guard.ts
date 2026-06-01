import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('access_token');

  if (!token) {
    router.navigate(['/auth/login']);
    return false;
  }

  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));

    const userRole = decodedPayload.role;

    const expectedRoles: string[] = route.data['roles'];
    
    if (!expectedRoles || expectedRoles.includes(userRole)) {
      return true;
    } else {
      alert('Akses Ditolak! Halaman ini khusus Administrator.');
      router.navigate(['/dashboard']);
      return false;
    }
  } catch (error) {
    console.error('Gagal membaca token:', error);
    router.navigate(['/auth/login']);
    return false;
  }
};