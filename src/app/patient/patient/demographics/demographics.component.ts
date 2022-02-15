import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PatientService } from '../../patient.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

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
    private activeRoute: ActivatedRoute


  ) {
    this.pId = this.activeRoute.snapshot.paramMap.get('id')
    console.log("demog PID",this.pId);
      if (this.pId) {
        this.getPatientById();

      }
    this.initForm();
    
  }

  ngOnInit(): void {
  }


  

  initForm() {

    this.demographicForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
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
        this.router.navigate(['/patient/immunization-details']);
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
