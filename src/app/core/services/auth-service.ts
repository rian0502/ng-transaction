import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private url = 'http://127.0.0.1:3000/auth/login';

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.url, credentials);
  }
}
