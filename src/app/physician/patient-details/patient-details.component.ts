import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhysicianService } from '../physician.service';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  patientname:string;
  appdate: string;
  title:string;
  status:string;
  appointment:string
}


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})

export class PatientDetailsComponent implements OnInit {
  displayedColumns: string[] = [ 'patientname','appdate', 'title', 'status', 'appointment'];
  dataSource!: MatTableDataSource<any>;

 

  constructor(private fb: FormBuilder, private physicianService: PhysicianService) {}

  ngOnInit(): void {
    this.getAllPhysiciandata();
  }

  
  getAllPhysiciandata(){
    // alert();
     this.physicianService.getPhysician().subscribe(res=>{
      
      console.log("all data:",res);
     
       this.dataSource=new MatTableDataSource(res);
       console.log("all data:",res);
     })}
}

