import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicianComponent } from './physician/physician.component';
import { SharedModule } from '../shared/shared.module';
import { PhysicianRoutingModule } from './physician-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [PhysicianComponent],
  imports: [
    CommonModule,
    SharedModule,
    PhysicianRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
    
    
  ],
  exports: [
    PhysicianComponent,
  ]
})
export class PhysicianModule { }
