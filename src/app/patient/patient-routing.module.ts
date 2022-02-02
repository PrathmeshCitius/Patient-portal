import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { MyProfileComponent } from './my-profile/my-profile.component';
 
import { PatientComponent } from './patient/patient.component';
import { LandingComponent } from '../shared/navigation/landing/landing.component';

 
const routes: Routes = [



    {

        path: '', component:LandingComponent,
        
        children: [
          {
            path: 'dashboard',
            component: PatientComponent
          },
          {
            path: 'myprofile',
            component: MyProfileComponent
          }
         ]
      },

  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }