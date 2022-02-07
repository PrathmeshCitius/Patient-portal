import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicianComponent } from './physician/physician.component';
import { SharedModule } from '../shared/shared.module';
import { PhysicianRoutingModule } from './physician-routing.module';
import { PhysicianSidebarComponent } from './physician-sidebar/physician-sidebar.component';


@NgModule({
  declarations: [PhysicianComponent, PhysicianSidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    PhysicianRoutingModule 
  ],
  exports: [
    PhysicianComponent,
  ]
})
export class PhysicianModule { }
