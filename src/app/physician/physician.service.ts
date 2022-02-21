import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import{RouterTestingModule} from '@angular/router/testing';
@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  getPhysicianData() {
    throw new Error('Method not implemented.');
  }

  constructor(private HttpClient: HttpClient, HttpClientModule:HttpClient) { }

  getPatientVital() {
    return this.HttpClient.get<any>("http://localhost:3000/physician")
  }

  postPatientVital(data: any) {
    return this.HttpClient.post<any>("http://localhost:3000/physician", data)
  }

  updatePostPatientVital(id: number, data: any) {
    return this.HttpClient.put<any>("http://localhost:3000/physician/" + id, data)
  }


  deletePostPatientVital(id: number) {
    return this.HttpClient.delete<any>("http://localhost:3000/physician/" + id)
  }
  ////////////physician info/////////////Snehal//////////////////////////
  getUserById(id: any) {
    return this.HttpClient.get("http://localhost:3000/users/" + id);
  }
  updateUserById(id: number, data: any) {
    return this.HttpClient.put<any>("http://localhost:3000/users/" + id, data)
  }
  ////////////Prathmesh Physician demo api////////////////
  getPhysician(){
    return this.HttpClient.get<any>("http://localhost:3000/eventPatientDemo/" );
  }
}
