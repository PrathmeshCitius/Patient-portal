import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PatientService } from '../../patient.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthService } from 'src/app/auth/auth.service';
import { GlobalService } from 'src/app/services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {

  scrollConfig: PerfectScrollbarConfigInterface = { suppressScrollX: false };
  demographicForm: FormGroup;
  submitted = false;
  

  pId: any;
  pDemoData: any;


  constructor(private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private api: GlobalService


  ) {
    this.pId = this.activeRoute.snapshot.paramMap.get('id');
      if (this.pId) {
        this.getPatientById();

      }
    this.initForm();
    
  }

  ngOnInit(): void {
    // this.api.userInfo.subscribe((value)=>{
    //   console.log(value);
    //   //  this.patientId = value[0].userId;
    //   //  console.log( this.patientId);
    //  });
  }


  

  initForm() {

    this.demographicForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob:  [moment().format('dd-mm-yy'),[Validators.required]],
      gender: ['', Validators.required],
      ethnicity: [''],
      education: [''],
      occupation: [''],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      medHist: [''],
      fmMedHist: [''],
      surgery: [''],
      insurance: [''],


    });
  }


  getPatientById() {
    this.patientService.fetchPatientDemographicsById(this.pId).subscribe(response => {
      this.pDemoData = response;
      this.patchPDemodata();
    });
  }




  onSubmit() {

    if (this.demographicForm.invalid) return;

    this.patientService.updatePatientDemographics(this.demographicForm.value,this.pId).subscribe((response) => {

      if (response) {
        this.router.navigate(['/patient/appointment-history']);
      }


    });
  }


  patchPDemodata() {
    this.demographicForm.patchValue({

      firstName: this.pDemoData.firstName,
      lastName: this.pDemoData.lastName,
      dob: this.pDemoData.dob,
      gender: this.pDemoData.gender,
      ethnicity: this.pDemoData.ethnicity,
      education: this.pDemoData.education,
      occupation: this.pDemoData.occupation,
      address: this.pDemoData.address,
      contact: this.pDemoData.contact,
      medHist: this.pDemoData.medHist,
      fmMedHist: this.pDemoData.fmMedHist,
      surgery: this.pDemoData.surgery,
      insurance: this.pDemoData.insurance,



    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.demographicForm.controls; }

}
