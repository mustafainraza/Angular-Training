import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../core/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class customerGuard implements CanActivate {
  
  constructor(private router: Router,private authService:LoginService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any {
    
    // Check if the user is logged in and if their role is 'customer'
    if (state.url.includes('customer')) {
      if(this.authService.isLoggedIn())
      {
        return true;
      }
      else
      {
        this.router.navigate(['/login'])
      } // Allow access to the route
    } else {
      // Redirect to the customer login page or any other page you prefer
      this.router.navigate(['/page-not-available'])
      return false; // Block access to the route
    }
  }
}