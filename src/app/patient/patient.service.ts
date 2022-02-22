import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ScheduleData } from './schedule.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly API_URL = `${environment.apiUrl}`;
  students: ScheduleData[];
  constructor(
  private http: HttpClient,
  ) { }
  

  updatePatientDemographics(data,id) {
    return this.http.put(`${this.API_URL}/patientdemo/${id}`, data);
  }

  fetchPatientDemographicsById(id){
    return this.http.get(`${this.API_URL}/patientdemo/${id}`);
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
  //Snehals code for Event
  postEvent(data:any){
    return this.http.post<any>('http://localhost:3000/eventList', data);
  }
  getEvent(){
    return this.http.get<any>('http://localhost:3000/eventList');
  }
  public getSchedule(): any {
    setTimeout(() => {this.getEvent().subscribe(res=>{this.students=res 
    console.log(this.students)})
    },500);
    
    const scheduleObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
    return scheduleObservable;
  }
/////////////////dynamic chart trial/////////////
getdoctorsFromEventlist()
{
  return this.http.get<any>('http://localhost:3000/eventList/');
}
  
}
