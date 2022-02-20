import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicianComponent } from './physician/physician.component';
import { SharedModule } from '../shared/shared.module';
import { PhysicianRoutingModule } from './physician-routing.module';
import { PhysicianSidebarComponent } from './physician-sidebar/physician-sidebar.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/navigation/header/header.component';
import { ChartsModule } from 'ng2-charts';
import { PhysicianDashbardComponent } from './physician-dashbard/physician-dashbard.component';
import { RouterModule } from '@angular/router';
import { PhysicianinfoComponent } from './physicianinfo/physicianinfo.component';
// import { PhysicianMasterComponent } from './physician-master/physician-master.component';
@NgModule({
  declarations: [PhysicianComponent,
     //HeaderComponent,
      PhysicianSidebarComponent,
       PatientDetailsComponent,
       PhysicianDashbardComponent,
      PhysicianinfoComponent,
      // PhysicianMasterComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    PhysicianRoutingModule, 
    ReactiveFormsModule,
    ChartsModule,
    RouterModule
  ],
  exports: [
    PhysicianDashbardComponent,
    PhysicianComponent,
    PhysicianSidebarComponent,
    HeaderComponent,
    PhysicianinfoComponent
  
  ]
})
export class PhysicianModule { }
