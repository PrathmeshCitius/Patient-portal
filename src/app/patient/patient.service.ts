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


  createPatientDemographics(data) {
    return this.http.post(`${this.API_URL}/patientdemo`, data);
  }
}
