import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class ApiService{
    constructor(private http :HttpClient){

    }

    postImmunizationDetails(data:any){
        return this.http.post<any>("http://localhost:3000/immunization_details/", data)
        }

    getImmunizationDetails(){
        return this.http.get<any>("http://localhost:3000/immunization_details/")
    }
    updateImmunizationDetails(id:number, data:any){
        return this.http.put<any>("http://localhost:3000/immunization_details/"+id, data)
    }
    deleteImmunizationDetails(id:number){
        return this.http.delete<any>("http://localhost:3000/immunization_details/"+id)
    }

  
}