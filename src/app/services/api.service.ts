import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }
  postMedication(data:any){
    return this.http.post<any>("http://localhost:3000/medicationList/", data);
  }
  getMedication(){
    return this.http.get<any>("http://localhost:3000/medicationList/");
  }
}
