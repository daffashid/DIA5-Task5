import { Inject, Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private route: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('token');
    if (!isLoggedIn) {
      this.route.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
