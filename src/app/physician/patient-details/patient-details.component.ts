import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhysicianService } from '../physician.service';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  appdate: string;
  patientname:string;
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
  displayedColumns: string[] = ['appdate', 'patientname', 'title', 'status', 'appointment'];
  dataSource!: MatTableDataSource<any>;

 

  constructor(private fb: FormBuilder, private physicianService: PhysicianService) {}

  ngOnInit(): void {
    this.getAllPhysiciandata();
  }

  
  getAllPhysiciandata(){
    // alert();
     this.physicianService.getPhysician().subscribe(res=>{
       alert();
      // console.log("all data:",res);
     
       this.dataSource=new MatTableDataSource(res);
       console.log("all data:",res);
     })}
}

