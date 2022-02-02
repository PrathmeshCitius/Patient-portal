import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [LoginComponent, RegistrationComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
   
    
    
  ]
})
export class AuthModule { }
