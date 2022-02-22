import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {
  physicianRegisterForm: FormGroup;
  

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>,
    private as: AdminService,private fb: FormBuilder) { }

  ngOnInit(): void {

    this.initForm();
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  doAction(){

    

    this.physicianRegisterForm.value.password = `${this.physicianRegisterForm.value.firstName}@1234`;
    this.physicianRegisterForm.value.confirmPassword = `${this.physicianRegisterForm.value.firstName}@1234`;
   
   if(this.physicianRegisterForm.invalid){
     return 
   }
    this.as.registerPhysician(this.physicianRegisterForm.value).subscribe((res)=>{
        if(res) {
          this.dialogRef.close({event: 'Ok'});
        }
    });
   
  }


  initForm() {

    this.physicianRegisterForm = this.fb.group({

      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      dob:   new FormControl(moment().format('dd-mm-yy'),[Validators.required]),
      phone: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
      address: new FormControl(''),
      image:new FormControl(''),
      role: new FormControl('physician'),
      isAuthenticated:new FormControl(false),
      speciality: new FormControl('', [Validators.required])

    });
  }


}
