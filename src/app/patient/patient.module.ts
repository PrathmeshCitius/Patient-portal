import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { LandingComponent } from '../shared/navigation/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './patient/dashboard/dashboard.component';
import { MyprofileComponent } from './patient/myprofile/myprofile.component';
import { ScheduleAppointmentComponent } from './patient/schedule-appointment/schedule-appointment.component';
import { AppointmentHistoryComponent } from './patient/appointment-history/appointment-history.component';
import { DemographicsComponent } from './patient/demographics/demographics.component';
import { MedicationAndAllergiesComponent } from './patient/medication-and-allergies/medication-and-allergies.component';
import { ImmunizationDetailsComponent } from './patient/immunization-details/immunization-details.component';
import { PatientVitalsComponent } from './patient/patient-vitals/patient-vitals.component';
import { OrdersComponent } from './patient/orders/orders.component';
import { PatientEducationComponent } from './patient/patient-education/patient-education.component';
import { SideNavbarComponent } from './patient/side-navbar/side-navbar.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from '../shared/navigation/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';





@NgModule({

 
  declarations: [PatientComponent, DashboardComponent, MyprofileComponent, ScheduleAppointmentComponent, AppointmentHistoryComponent, DemographicsComponent, MedicationAndAllergiesComponent, ImmunizationDetailsComponent, PatientVitalsComponent, OrdersComponent, PatientEducationComponent, SideNavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    PatientRoutingModule,
    MatCardModule,
    MatDividerModule,
<<<<<<< HEAD
    SharedModule
=======
    SharedModule,
    ReactiveFormsModule,
    MatSidenavModule
>>>>>>> 6f6c2d9f3a6df3bd74a12514a09d8451f713d7e0

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  // exports: [
  //   PatientComponent
  // ]
})
export class PatientModule { 
  
}
