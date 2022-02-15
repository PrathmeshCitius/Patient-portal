import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../patient.service';
import { ApiService } from '../../services/services';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  editMode:boolean=false;
  profileForm:FormGroup;
  userData:any;
  pId:any;
  constructor(private fb:FormBuilder, 
              private router:Router, 
              private apiService:ApiService,
              private activatedRoute:ActivatedRoute, 
              private patientService:PatientService ) {
                this.pId= this.activatedRoute.snapshot.paramMap.get('id');
                console.log("PID", this.pId)
  if(this.pId){
    this.getPatientData();
  }
    
   }

  ngOnInit(): void {
    this.profileForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      dob:['',Validators.required],      
      phone:['',Validators.required],
      password:[''],
      confirmPassword:[''],
      address:['', Validators.required],      
      image:['',Validators.required],
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
    this.router.navigate([],{queryParams:{EditMode:null}})
  }

  getPatientData(){
    this.apiService.getUserById(this.pId).subscribe(res=>{
      console.log("userID Response",res);
      this.userData=res;
      console.log("userData", this.userData)
      this.patchUserData();
    })    
    
  }
  patchUserData(){
    this.profileForm.patchValue({
      firstName:this.userData.firstName,
      lastName:this.userData.lastName,
      email:this.userData.email,
      dob:this.userData.dob,     
      phone:this.userData.phone,
      address:this.userData.address,
      password:this.userData.password,
      confirmPassword:this.userData.confirmPassword
    })
    console.log("updated profile form value",this.profileForm.value)
  }
  
  upadteUserData(){
    this.apiService.updateUserById(this.pId,this.profileForm.value).subscribe(res=>{
      alert("user Updated Successfully");
      this.getPatientData();
      this.router.navigate([],{queryParams:{EditMode:null}})
    })
  }
  onFileSelected(event:any){
    console.log("111111111111",event)
  }
}
