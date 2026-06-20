import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  private authService = inject(AuthService)
  private router = inject(Router)

  currentUser$ = this.authService.currentUser$;

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}