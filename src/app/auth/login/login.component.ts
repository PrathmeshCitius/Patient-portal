import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasternotficationService } from 'src/app/services/toasternotfication.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService:ToasternotficationService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  login() {
    this.authService.authenticateUser().subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.notificationService.showSuccess("Login Successful", "User");
        this.loginForm.reset();
        this.router.navigateByUrl('/patient');
      } else {
        this.notificationService.showError("Login Failed", "User");
      }
    }, err => {
      alert("something went wrong")
    }
    )
  }
}
