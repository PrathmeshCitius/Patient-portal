import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
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
import { PatientRoutingModule } from './patient-routing.module';




@NgModule({
  declarations: [PatientComponent, DashboardComponent, MyprofileComponent, ScheduleAppointmentComponent, AppointmentHistoryComponent, DemographicsComponent, MedicationAndAllergiesComponent, ImmunizationDetailsComponent, PatientVitalsComponent, OrdersComponent, PatientEducationComponent, SideNavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    PatientRoutingModule
  ],
  exports: [
    PatientComponent
  ]
})
export class PatientModule { }
