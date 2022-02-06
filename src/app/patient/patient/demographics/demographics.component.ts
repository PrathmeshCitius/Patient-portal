import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../../patient.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {

  scrollConfig: PerfectScrollbarConfigInterface = {suppressScrollX:false};
  demographicForm: FormGroup;
  submitted = false;

  constructor(fb: FormBuilder,
    private patientService: PatientService,
    public router:Router
    ) {
    this.demographicForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      ethnicity: [''],
      education: [''],
      occupation:[''],
      address: ['', Validators.required],
      contact:['',Validators.required],
      medHist:[''],
      fmMedHist:[''],
      surgery:[''],
      insurance:[''],

    
    });
  }

  ngOnInit(): void {
  }


  onSubmit(){
  
    this.patientService.createPatientDemographics(this.demographicForm.value).subscribe((response) => {
   
      if (response) {
        // sessionStorage.setItem('user', JSON.stringify(response.data));
        // this.snackBar.open(response.message);
        // setTimeout(() => {
        //   this.snackBar.dismiss();
        //   this.router.navigateByUrl('/todos');
          this.router.navigate(['/immunization-details']);
        }
      
   
    });
  }
  
    // convenience getter for easy access to form fields
    get f() { return this.demographicForm.controls; }

}
