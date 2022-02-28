import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/api.service';
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
    private authService: AuthService,
    private apiService: GlobalService
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
    const data = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    this.authService.login(data).subscribe(res => {
      if(res){
        console.log("Indu",res)
        localStorage.setItem('currentUserId',res.userId)
      this.notificationService.showSuccess("Login Successful", "User");
      this.loginForm.reset();
      
      if (res.role == 'admin'){
      this.router.navigateByUrl('/admin/manageuser');
      } else if (res.role == 'patient'){
        this.router.navigateByUrl('/patient');
      } else {
        this.router.navigateByUrl('/physician');
      }
      }
    }, err => {
      this.notificationService.showError("Login Failed", "User");
    }
    )
  }
}
