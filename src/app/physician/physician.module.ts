import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicianComponent } from './physician/physician.component';
import { SharedModule } from '../shared/shared.module';
import { PhysicianRoutingModule } from './physician-routing.module';
import { PhysicianSidebarComponent } from './physician-sidebar/physician-sidebar.component';
// import { PatientDetaiYComponent } from './patient-detai-y/patient-detai-y.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PhysicianComponent, PhysicianSidebarComponent, PatientDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PhysicianRoutingModule, 
    ReactiveFormsModule
  ],
  exports: [
    PhysicianComponent,
  ]
})
export class PhysicianModule { }
