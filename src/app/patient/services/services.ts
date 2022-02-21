import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhysicianService } from "src/app/physician/physician.service";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService implements OnInit {
    getPatientVital() {
      throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient, private physicianService: PhysicianService, private authService:AuthService) {

    }
    ngOnInit(): void {
       this.getPhysicianData();
    }

    postImmunizationDetails(data: any) {
        return this.http.post<any>("http://localhost:3000/immunization_details/", data)
    }

    getImmunizationDetails() {
        return this.http.get<any>("http://localhost:3000/immunization_details/")
    }
    updateImmunizationDetails(id: number, data: any) {
        return this.http.put<any>("http://localhost:3000/immunization_details/" + id, data)
    }
    deleteImmunizationDetails(id: number) {
        return this.http.delete<any>("http://localhost:3000/immunization_details/" + id)
    }

    getPhysicianData() {
        return this.physicianService.getPatientVital();
    }
//code for user profile

getUserById(id:any){
    return this.http.get('http://localhost:3000/users/'+id)

}
updateUserById(id:any, data:any){
    return this.http.put<any>("http://localhost:3000/users/"+ id, data)
}

//code for appointment history

getAppointmentHistory(){
    return this.http.get<any>("http://localhost:3000/eventList/")
}
getDetailById(id:any){
    return this.http.get("http://localhost:3000/eventList/"+id)
    
}
}