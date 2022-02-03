import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    this.createLoginForm();


  }


  createLoginForm() {

    this.loginForm = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl('', [Validators.required])

    });



  }
  ngOnInit(): void {
  }


  onSubmit(): void {
    console.log("hi");
    if (this.loginForm.invalid) return;


    this.router.navigateByUrl('/patient');


  }


}




