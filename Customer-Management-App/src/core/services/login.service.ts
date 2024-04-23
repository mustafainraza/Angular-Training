import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../app/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {}

  login(email: any, password: any): Observable<boolean> {
    return this.http.get<any[]>('http://localhost:3000/loginUsers').pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        localStorage.setItem('user', JSON.stringify(user));
        return !!user; // Return true if user exists, otherwise false
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    console.log(localStorage.getItem('user')!==null)
    return localStorage.getItem('user') !== null;
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
