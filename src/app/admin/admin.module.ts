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
import { SharedModule } from '../shared/shared.module';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ManagePatientRecordsComponent,
    ManagePhysicianRecordsComponent,
    ManageAppointmentComponent,
    BillingComponent,
    SideNavBarComponent,
    ManageuserComponent,
    DialogComponent,
    FormDialogComponent,
    ],
  imports: [
    CommonModule, RouterModule, AdminRoutingModule,SharedModule,ReactiveFormsModule,FormsModule
  ],
  exports: [
     AdminComponent,
    // DashboardComponent,
    // ManageAppointmentComponent,
    // ManagePatientRecordsComponent,
    // ManagePatientRecordsComponent,
    // SideNavBarComponent,
    // BillingComponent
  ]
})
export class AdminModule { }
