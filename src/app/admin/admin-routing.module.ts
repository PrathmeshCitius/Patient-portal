import { LandingComponent } from '../shared/navigation/landing/landing.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';
import { ManagePatientRecordsComponent } from './manage-patient-records/manage-patient-records.component';
import { ManagePhysicianRecordsComponent } from './manage-physician-records/manage-physician-records.component';
import { AdminComponent } from './admin/admin.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
const routes: Routes = [
    {
        path: "", component: AdminComponent,
        children: [
        
         {
            path: 'dashboard', component: DashboardComponent,
         },
         {
            path: 'manageuser', component: ManageuserComponent,
         },
         {
            path: 'managepatientrecords', component: ManagePatientRecordsComponent,
         },    
         {
            path: 'managephysicianrecords', component: ManagePhysicianRecordsComponent,
         },
         {
            path: 'manageappontment', component:ManageAppointmentComponent,
         },
         {
            path: 'billing', component: BillingComponent,
         }
        ]
    }


];



@NgModule({

    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]

})


export class AdminRoutingModule { }