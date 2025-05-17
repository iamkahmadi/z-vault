import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = `${environment.apiUrl}/passwords`;

  constructor(private http: HttpClient) {}

  getPasswords(): Observable<any[]> {
    console.log(this.http.get<any[]>(this.apiUrl));
    return this.http.get<any[]>(this.apiUrl);
  }

  getPassword(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addPassword(passwordData: any): Observable<any> {
    return this.http.post(this.apiUrl, passwordData);
  }

  updatePassword(id: string, passwordData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, passwordData);
  }

  deletePassword(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}




// Angular Build Will Pick the Right Environment
// When you run:
// ng build --configuration production
// Angular will automatically replace environment.ts with environment.prod.ts.

