import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../data/domain/User';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.getUser().pipe(
    map((res: User) => {
      return res !== undefined;
    }),
    catchError(() => {
      const loginPath: UrlTree = router.parseUrl("/login");
      return of(loginPath)
    })
  );
};
