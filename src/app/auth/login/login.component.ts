import { HttpClient } from '@angular/common/http';
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

  hide = true;
  loginForm= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

 login()
 {
this.http.get<any>("http://localhost:3000/registerUsers")
.subscribe(res=>{
  const user=res.find((a:any)=>{
    return a.email===this.loginForm.value.email && a.password ===this.loginForm.value.password
  });
  if(user)
  {
    alert("login successfully");
    this.loginForm.reset();
    this.router.navigate(['patient'])
  }else{
    alert("user not found")
  }
}, err=>
{
  alert("something went wrong")
}
)
 }
}



