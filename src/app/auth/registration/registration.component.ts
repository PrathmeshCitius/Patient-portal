import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  hide = true;
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    dob: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
    address: new FormControl(''),
    image:new FormControl('')
  },
    { validators: passwordsMatchValidator() }
  )

  constructor(private http: HttpClient, private router: Router) { }

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
  submit() {
    if (this.registerForm.invalid) {
      return;
    }


    this.http.post<any>("http://localhost:8000/auth/register", this.registerForm.value)
      .subscribe(res => {


        alert("resistered successfully");
        this.registerForm.reset();
        this.router.navigate(['auth/login'])
      }, err => {
        alert("something went wrong");
      })
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

