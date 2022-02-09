import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {

  constructor(private HttpClient: HttpClient) { }

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

 

}
