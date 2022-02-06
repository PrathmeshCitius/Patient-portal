import { Component, OnInit, ViewChild } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';                                                       

@Component({
  selector: 'app-medication-and-allergies',
  templateUrl: './medication-and-allergies.component.html',
  styleUrls: ['./medication-and-allergies.component.css']
})
export class MedicationAndAllergiesComponent implements OnInit {
  medicationForm !:FormGroup;
  // imports:[
  //   MatFormFieldModule,
  //   MatButtonModule
  // ]
  // dataSource!: MatTableDataSource<any>;
  // @ViewChild(MatPaginator) paginator! : MatPaginator;
  // @ViewChild(MatSort) sort! : MatSort;
  
  displayColumn:string[]=['allergy', 'socialdrug', 'otherdetail', 'currentmedication', 'overthecounter', 'HVMA']

  constructor(private formBuilder: FormBuilder, private api: ApiService ) { }

  ngOnInit(): void {
    this.medicationForm =this.formBuilder.group({
      allergy:['',Validators.required],
      socialdrug:['',Validators.required],
      otherdetail:['',Validators.required],
      currentmedication:['',Validators.required],
      overthecounter:['',Validators.required],
      HVMA:['',Validators.required],
    })
    this.getAllMedication();
  }
  addmedication(){
    // console.log();
    if(this.medicationForm.valid){
      this.api.postMedication(this.medicationForm.value).subscribe({
        next:(res)=>{
          alert("Added Successfully ");
          this.medicationForm.reset;
        },
        error:()=>{
          alert("Errow while adding")
        }
      })
    }
  }
  getAllMedication(){
     this.api.getMedication().subscribe({
       next:(res)=>{
         console.log(res);
       },
       error:(err)=>{
         alert("error")
       }
     })
  }
}
