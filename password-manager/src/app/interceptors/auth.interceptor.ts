import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.tokenSubject.value;

  const cloned = req.clone({
    setHeaders: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });

  return next(cloned).pipe(
    catchError(err => {
      if (err.status === 401) {  // Unauthorized error
        authService.logout();
        router.navigate(['/login']);
      }
      return of(err);
    })
  );
};
