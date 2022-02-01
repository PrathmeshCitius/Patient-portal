import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, LogoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    LogoutComponent
    
  ]
})
export class AuthModule { }
