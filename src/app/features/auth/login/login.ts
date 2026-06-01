import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core'; // 1. Ubah jadi huruf 'i' kecil
import { AuthService } from '../../../core/services/auth-service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  private authService = inject(AuthService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.login(credentials as any).subscribe({
        next: (response: any) => {
          const token = response.access_token;
          if (token) {
            localStorage.setItem('access_token', token);
            this.router.navigate(['/dashboard']);
          } else {
            console.error('Login failed: No token received');
          }
        },
        error: (err: any) => {
          console.error('Error dari Backend:', err);
          alert('Login Gagal! Periksa kembali email dan password Anda.');
        }
      });
    }
  }
}