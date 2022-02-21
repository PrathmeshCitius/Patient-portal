import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly API_URL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }



  getUser() {

    return this.http.get<any>(`${this.API_URL}/users`);
  }


  setUserAuth(data,id) {
    return this.http.put(`${this.API_URL}/users/${id}`, data);
  }

}
