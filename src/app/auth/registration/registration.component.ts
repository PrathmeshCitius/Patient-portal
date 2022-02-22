import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { Router } from '@angular/router';
import { ThirdPartyDraggable } from '@fullcalendar/interaction';
import * as moment from 'moment';
import { ToasternotficationService } from 'src/app/services/toasternotfication.service';
import { AuthService } from '../auth.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [
  
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
 
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  hide = true;
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    dob:   new FormControl(moment().format('dd-mm-yy'),[Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
    address: new FormControl(''),
    image:new FormControl(''),
    role: new FormControl('patient'),
    isAuthenticated:new FormControl(false)
  },
    { validators: passwordsMatchValidator() }
  )

  constructor(private authService:AuthService,
    private http: HttpClient,
    private datePipe: DatePipe, private router: Router,private notificationService:ToasternotficationService) { }

  ngOnInit(): void {
  }
  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get dob() {
    return this.registerForm.get('dob');
  }
  get address() {
    return this.registerForm.get('address');
  }
  get image() {
    return this.registerForm.get('image');
  }

  get role(){
    return this.registerForm.get('role');
  }

  get isAuthenticated(){
    return this.registerForm.get('isAuthenticated');
  }
  submit() {
    if (this.registerForm.invalid) {
      return;
    }

    //this.registerForm.value.dob = this.datePipe.transform(this.registerForm.value.dob, 'dd-MM-yyyy');


    this.http.post<any>("http://localhost:8000/auth/register", this.registerForm.value)
      .subscribe(res => {

        if(res){

        const formdata = {

        
            "firstName": this.registerForm.value.firstName,
            "lastName": this.registerForm.value.lastName,
            "dob": this.registerForm.value.dob,
            "gender": "",
            "ethnicity": "",
            "education": "",
            "occupation": "",
            "address": this.registerForm.value.address,
            "contact": this.registerForm.value.phone,
            "medHist": "",
            "fmMedHist": "",
            "surgery": "",
            "insurance": "",
            "id": res.id
          }

          console.log(formdata);

          this.authService.updateDemographics(formdata).subscribe((res)=>{
              if(res){
                console.log("added to patient dmeo");
              }
          });

        }

    this.notificationService.showSuccess("Registered Successfully", "Patient");
        // alert("resistered successfully");
        this.registerForm.reset();
        this.router.navigate(['auth/login'])
      }, err => {
        // alert("something went wrong");
      })
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.router.navigate(['auth/login']);
  }
}

