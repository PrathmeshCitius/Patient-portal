import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicianComponent } from './physician/physician.component';



@NgModule({
  declarations: [PhysicianComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PhysicianComponent
  ]
})
export class PhysicianModule { }
