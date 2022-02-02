import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PatientRoutingModule } from './patient-routing.module';
import { LandingComponent } from '../shared/navigation/landing/landing.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [PatientComponent, MyProfileComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule
  ],
  // exports: [
  //   PatientComponent
  // ]
})
export class PatientModule { }
