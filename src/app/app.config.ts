import { provideRouter } from '@angular/router';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { routes } from './app.routes';
import { AuthService } from './core/services/auth-service';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAppInitializer(() => {
      const authService = inject(AuthService);
      return authService.restoreSessionOnLoad();
    }),
  ],
};