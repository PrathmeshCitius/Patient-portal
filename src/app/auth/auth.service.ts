import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  // authenticateUser() {
  //   return this.http.get<any>('http://localhost:3000/users');
  // }

   currentUserValue() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

  login(data){
    return this.http.post<any>('http://localhost:3000/login', data);
  }
}
