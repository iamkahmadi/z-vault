import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.tokenSubject.value;

  const cloned = req.clone({
    setHeaders: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });

  return next(cloned);
};
