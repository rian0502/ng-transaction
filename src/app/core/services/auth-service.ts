import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginResponse, DecodedToken } from '../models/auth.model';
import { BehaviorSubject, Observable, Subject, tap, of, catchError, filter, take, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/auth';

  private access_token: string | null = null;
  private currentUserSubject = new BehaviorSubject<DecodedToken | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isRefreshing = false;
  private refreshTokenSubject = new Subject<string>();

  get currentToken(): string | null {
    return this.access_token;
  }

  get currentUserValue(): DecodedToken | null {
    return this.currentUserSubject.value;
  }

  login(credentials: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/login`, credentials, { withCredentials: true }).pipe(
      tap((response) => {
        if (response?.access_token) {
          this.access_token = response.access_token;
          this.decodeAndSetUser(response.access_token, response.user.name);
        }
      })
    );
  }

  refreshToken(): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(`${this.url}/refresh`, {}, { withCredentials: true }).pipe(
      tap((response) => {
        if (response.access_token) {
          this.access_token = response.access_token;
          this.decodeAndSetUser(response.access_token);
        }
      })
    );
  }

  handleRefresh(): Observable<string> {
    if (this.isRefreshing) {
      return this.refreshTokenSubject.pipe(
        filter((token): token is string => token !== null),
        take(1)
      );
    }

    this.isRefreshing = true;

    return this.refreshToken().pipe(
      switchMap((response) => {
        this.isRefreshing = false;
        this.refreshTokenSubject.next(response.access_token);
        return of(response.access_token);
      }),
      catchError((err) => {
        this.isRefreshing = false;
        this.refreshTokenSubject.error(err);
        this.refreshTokenSubject = new Subject<string>();
        throw err;
      })
    );
  }

  restoreSessionOnLoad(): Observable<any> {
    return this.refreshToken().pipe(
      catchError(() => {
        this.clearFrontendState();
        return of(null);
      })
    );
  }

  logout() {
    this.clearFrontendState();
    this.http.post(`${this.url}/logout`, {}, { withCredentials: true }).subscribe({
      next: () => this.clearFrontendState(),
      error: () => this.clearFrontendState(),
    });
  }

  private decodeAndSetUser(token: string, fallbackName?: string) {
    try {
      const payloadBase64 = token.split('.')[1];
      const decodedPayload: DecodedToken = JSON.parse(atob(payloadBase64));
      if (fallbackName) decodedPayload.name = fallbackName;
      this.currentUserSubject.next(decodedPayload);
    } catch (error) {
      console.error('Gagal membaca token:', error);
      this.clearFrontendState();
    }
  }

  private clearFrontendState() {
    this.access_token = null;
    this.currentUserSubject.next(null);
  }
}