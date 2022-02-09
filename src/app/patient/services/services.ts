import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhysicianService } from "src/app/physician/physician.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService implements OnInit {
    getPatientVital() {
      throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient, private physicianService: PhysicianService) {

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



}