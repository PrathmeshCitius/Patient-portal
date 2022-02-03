import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {

    this.loginForm = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl('', [Validators.required])

    });

  }

  ngOnInit(): void {
  }


  onSubmit(){

  }

}




