import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { sanitizeShrinkWidth } from '@fullcalendar/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { PhysicianService } from '../physician.service';
import { GlobalService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-physicianinfo',
  templateUrl: './physicianinfo.component.html',
  styleUrls: ['./physicianinfo.component.css']
})
export class PhysicianinfoComponent implements OnInit {


  editMode:boolean=false;
  physicianinfoForm:FormGroup;
  userData:any;
  pId:any;
 selectedFile:File;
 maxDate: string;
 
  constructor(private fb:FormBuilder, 
              private router:Router, 
              private authService:AuthService,
              private activatedRoute:ActivatedRoute, 
              private physicianService:PhysicianService,
              
              private globalService:GlobalService ,
              private datePipe: DatePipe) {
                this.pId= this.activatedRoute.snapshot.paramMap.get('id');
                console.log("PID", this.pId)
                const dateFormat = 'yyyy-MM-dd';
    
                this.maxDate = datePipe.transform(new Date(), dateFormat);
  
  
  
   }
  ngOnInit(): void {
   
    this.physicianinfoForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      dob:['',Validators.required],
      phone:['',Validators.required],  
      address:[''] ,
      password:[''],
      confirmPassword:[''],      
      image:[''],   
      role:[''],
      isAuthenticated:['']
      })
    this.activatedRoute.queryParamMap.subscribe(res=>{
     let qParams=res.get('EditMode');
     console.log("Edit mode",qParams)
     if(qParams!=null){
       this.editMode=true
     }
     else{
       this.editMode=false;
     }
    })
      //current login user email

      
      // var result = res.filter(function(res_arg){

      //   // console.log()

      //   return res_arg.email == current_user;
      this.getUserData();
} 
  
  

  onSubmit(){
    if(this.physicianinfoForm.valid){
     console.log("Nilesh",this.physicianinfoForm.value);      
    }
    this.physicianinfoForm.reset();
  }
  onDiscard(){
    this.router.navigate([],{queryParams:{EditMode:null}})
  }

  getUserData(){
   this.physicianService.getUserById(this.pId).subscribe(res=>{
      console.log("PID",this.pId);
      this.userData=res;
      this.patchUsersData();    
   })    
  
  }
  patchUsersData(){
   
    this.physicianinfoForm.patchValue({
      firstName:this.userData.firstName,
      lastName:this.userData.lastName,
      email:this.userData.email,
      dob:this.userData.dob,     
      phone:this.userData.phone,
      address:this.userData.address,
      password:this.userData.password,
      confirmPassword:this.userData.confirmPassword,
      image:this.userData.image,
      role:this.userData.role,
      isAuthenticated: this.userData.isAuthenticated
      
    })
    console.log("updated profile form value",this.physicianinfoForm.value)
  }
  
  updateUserData(){  
    this.physicianService.updateUserById(this.pId, this.physicianinfoForm.value).subscribe(res=>{
      this.userData=res;
      alert("user Updated Successfully");
    this.getUserData();
    this.router.navigate([],{queryParams:{EditMode:null}})
     
    })

  }
 
}
