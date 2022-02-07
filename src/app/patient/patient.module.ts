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
//import { ImmunizationDetailsComponent } from './patient/immunization-details/immunization-details.component';
import { PatientVitalsComponent } from './patient/patient-vitals/patient-vitals.component';
import { OrdersComponent } from './patient/orders/orders.component';
import { PatientEducationComponent } from './patient/patient-education/patient-education.component';
import { SideNavbarComponent } from './patient/side-navbar/side-navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { DialogComponent } from './patient/immunization-details/dialog/dialog.component';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { DialogComponent } from './patient/immunization-details/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  declarations: [
    PatientComponent,
    DashboardComponent,
    MyprofileComponent,
    ScheduleAppointmentComponent,
    AppointmentHistoryComponent,
    DemographicsComponent,
    MedicationAndAllergiesComponent,
   // ImmunizationDetailsComponent,
    PatientVitalsComponent,
    OrdersComponent,
    PatientEducationComponent,
    SideNavbarComponent,
   // DialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PatientRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [],

  exports: [
    PatientComponent,
    //DialogComponent,
    MedicationAndAllergiesComponent,
    

  ]
})
export class PatientModule {
  name: string = "abc";
}
