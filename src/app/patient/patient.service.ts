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
}
