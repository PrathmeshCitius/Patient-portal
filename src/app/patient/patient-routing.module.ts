

import { LandingComponent } from '../shared/navigation/landing/landing.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './patient/dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { MyprofileComponent } from './patient/myprofile/myprofile.component';
import { OrdersComponent } from './patient/orders/orders.component';
import { PatientEducationComponent } from './patient/patient-education/patient-education.component';
import { AppointmentHistoryComponent } from './patient/appointment-history/appointment-history.component';
import { DemographicsComponent } from './patient/demographics/demographics.component';
import { MedicationAndAllergiesComponent } from './patient/medication-and-allergies/medication-and-allergies.component';
import { PatientVitalsComponent } from './patient/patient-vitals/patient-vitals.component';
import { ScheduleAppointmentComponent } from './patient/schedule-appointment/schedule-appointment.component';

const routes: Routes = [

    {
        path: "", component: PatientComponent,
        children: [{
            path: 'dashboard', component: DashboardComponent,
         },
         {
            path: 'myprofile', component: MyprofileComponent,
         },    
         {
            path: 'orders', component: OrdersComponent,
         },
         {
            path: 'appointment-history', component: AppointmentHistoryComponent,
         },
         {
            path: 'demographics/:id', component: DemographicsComponent,
         },
        
         {
            path: 'medication-and-allergies', component: MedicationAndAllergiesComponent,
         },
         {
            path: 'patient-education', component: PatientEducationComponent,
         },
         {
            path: 'patient-vitals', component: PatientVitalsComponent,
         },
         {
            path: 'schedule-appointment', component: ScheduleAppointmentComponent,
         }
        ]
    }


];



@NgModule({

    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]

})


export class PatientRoutingModule { }