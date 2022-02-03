import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { PhysicianComponent } from './physician/physician.component';
import { LandingComponent } from '../shared/navigation/landing/landing.component';

 
const routes: Routes = [
   

    {
        path: '', component:PhysicianComponent,
        
        children: [
          {
            path: 'physician/dashboard',
            component: PhysicianComponent
          },
    
         ]
      },

  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicianRoutingModule { }