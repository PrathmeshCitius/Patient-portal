import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagePatientRecordsComponent } from './manage-patient-records/manage-patient-records.component';
import { ManagePhysicianRecordsComponent } from './manage-physician-records/manage-physician-records.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';
import { BillingComponent } from './billing/billing.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';




@NgModule({
  declarations: [AdminComponent, 
    DashboardComponent,
     ManagePatientRecordsComponent, 
     ManagePhysicianRecordsComponent,
      ManageAppointmentComponent, 
      BillingComponent,
       SideNavBarComponent],
  imports: [
    CommonModule,RouterModule, AdminRoutingModule
  ],
  exports: [
    AdminComponent,
    DashboardComponent,
    ManageAppointmentComponent,
    ManagePatientRecordsComponent,
    ManagePatientRecordsComponent,
    SideNavBarComponent,BillingComponent
  ]
})
export class AdminModule { }
