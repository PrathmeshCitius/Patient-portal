import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { PatientRoutingModule } from './patient-routing.module';
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
import { DialogComponent } from './patient/immunization-details/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import { AppointmentDialogComponent } from './patient/schedule-appointment/appointment-dialog/appointment-dialog.component';
FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin,
  timeGridPlugin
]);


@NgModule({
  declarations: [
    PatientComponent,
    DashboardComponent,
    MyprofileComponent,
    ScheduleAppointmentComponent,
    AppointmentHistoryComponent,
    DemographicsComponent,
    AppointmentDialogComponent,
    MedicationAndAllergiesComponent,
    ImmunizationDetailsComponent,
    PatientVitalsComponent,
    OrdersComponent,
    PatientEducationComponent,
    SideNavbarComponent,
    DialogComponent,
    AppointmentDialogComponent,
  ],
  entryComponents:[
    AppointmentDialogComponent
  ]  ,
  imports: [
    CommonModule,
    RouterModule,
    PatientRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule, 
  ],
  schemas: [],

  exports: [
    PatientComponent,
    ImmunizationDetailsComponent,
    MedicationAndAllergiesComponent,
    DialogComponent,
    ScheduleAppointmentComponent,
  ]
})
export class PatientModule {
  name: string = "abc";
}
