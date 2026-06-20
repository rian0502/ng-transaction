import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap, throwError, filter, take } from 'rxjs';
import { AuthService } from '../services/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);

    const isAuthEndpoint =
        req.url.includes('/auth/login') ||
        req.url.includes('/auth/refresh') ||
        req.url.includes('/auth/logout');

    const token = authService.currentToken;
    let authReq = req;
    if (token && !isAuthEndpoint) {
        authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }

    return next(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401 && !isAuthEndpoint) {
                return authService.handleRefresh().pipe(
                    switchMap((newToken) => {
                        const retriedReq = req.clone({
                            setHeaders: { Authorization: `Bearer ${newToken}` },
                        });
                        return next(retriedReq);
                    }),
                    catchError((refreshError) => {
                        authService.logout();
                        return throwError(() => refreshError);
                    })
                );
            }
            return throwError(() => error);
        })
    );
};