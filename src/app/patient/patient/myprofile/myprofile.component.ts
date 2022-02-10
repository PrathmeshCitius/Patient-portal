import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  editMode:boolean=false;
  profileForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute, private patientService:PatientService ) { }

  ngOnInit(): void {
    this.profileForm=this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      dob:['',Validators.required],
      role:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required]
    })
    this.activatedRoute.queryParamMap.subscribe(res=>{
     let qParams=res.get('EditMode');
     if(qParams!=null){
       this.editMode=true
     }
     else{
       this.editMode=false;
     }
      
    })
  }

  onSubmit(){
    if(this.profileForm.valid){
      console.log(this.profileForm.value);      
    }
    this.profileForm.reset();
  }
  onDiscard(){
    this.profileForm.reset();
    this.router.navigate([],{queryParams:{EditMode:null}})
  }

  getPatientData(){
    this.patientService.fetchPatientDemographicsBy().subscribe(res=>{
      console.log("data for myprofile",res);
    })
  }
}
