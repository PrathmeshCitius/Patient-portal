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
    
      // this.apiService.setLoggedInUser().subscribe((res)=>{
      //   console.log(res);
         
      // })
      this.notificationService.showSuccess("Login Successful", "User");
      console.log("currentuser",JSON.stringify(res))
      this.loginForm.reset();
      this.router.navigateByUrl('/patient');
      }
    }, err => {
      this.notificationService.showError("Login Failed", "User");
    }
    )
  }
}
