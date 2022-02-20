import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicianComponent } from './physician/physician.component';
import { LandingComponent } from '../shared/navigation/landing/landing.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PhysicianDashbardComponent } from './physician-dashbard/physician-dashbard.component';
import { PhysicianinfoComponent } from './physicianinfo/physicianinfo.component';

const routes: Routes = [
  { 
    path: "", component: PhysicianComponent,
    children: [
      {
        path: '', component: PhysicianDashbardComponent,
      },
      {
        path: 'physician-dashboard', component: PhysicianDashbardComponent,
      },
      {
        path: 'patient-details', component: PatientDetailsComponent,
      },
      {
        path: 'physician-info/:id', component: PhysicianinfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicianRoutingModule {}
