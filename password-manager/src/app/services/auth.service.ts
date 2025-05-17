import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  public tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.tokenSubject.next(localStorage.getItem('access_token'));
  }

  get token$() {
    return this.tokenSubject.asObservable();
  }

  login(email: string, password: string) {
    return this.http.post<{ access_token: string }>(`${this.apiUrl}/auth/login`, { email, password })
      .subscribe(response => {
        console.log(response.access_token);

        localStorage.setItem('access_token', response.access_token);

        this.tokenSubject.next(response.access_token);
        this.router.navigate(['/dashboard']);
      });
  }

  register(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/user/register`, { email, password });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return !!this.tokenSubject.value;
  }


  isTokenValid() {
    const token = this.tokenSubject.value;
    if (!token) {
      return false;
    }

    // Optionally: Decode the token and check its expiration time
    const decodedToken = this.decodeToken(token);
    return decodedToken && decodedToken.exp * 1000 > Date.now(); // Example for JWT
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      return null;
    }
  }

}
