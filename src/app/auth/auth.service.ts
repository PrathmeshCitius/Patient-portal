import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  authenticateUser() {
    return this.http.get<any>('http://localhost:3000/registerUsers');
  }

   currentUserValue() {
    return localStorage.getItem('currentUser');
}

  // login(data: Login): Observable<ServerResponse<User>> {
  //   return this.http.post<ServerResponse<User>>(`${this.API_URL}/login`, data);
  // }
}
