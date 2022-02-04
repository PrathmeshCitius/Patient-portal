import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  // login(data: Login): Observable<ServerResponse<User>> {
  //   return this.http.post<ServerResponse<User>>(`${this.API_URL}/login`, data);
  // }
}
