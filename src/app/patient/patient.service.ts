import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly API_URL = `${environment.apiUrl}`;
  constructor(
  private http: HttpClient,
  ) { }

  updatePatientDemographics(data,id) {
    return this.http.put(`${this.API_URL}/patientdemo/${id}`, data);
  }

  fetchPatientDemographicsById(id){
    return this.http.get(`${this.API_URL}/patientdemo/${id}`);
  }
  fetchPatientDemographicsBy(){
    return this.http.get(`${this.API_URL}/patientdemo/`);
  }
  //Snehals code
  postMedication(data: any) {
    return this.http.post<any>('http://localhost:3000/medicationList/', data);
  }
  getMedication() {
    return this.http.get<any>('http://localhost:3000/medicationList/');
  }
  updateMedication(id:number,data:any){
    return this.http.put<any>("http://localhost:3000/medicationList/"+id, data)
  }
  deleteMedication(id:number){
    return this.http.delete<any>("http://localhost:3000/medicationList/"+id)
  }
  
}
