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
import { RouterModule } from '@angular/router';
import { PhysicianinfoComponent } from './physicianinfo/physicianinfo.component';
import { PhysicianDashbardComponent } from './physician-dashbard/physician-dashbard.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { HttpClientModule } from '@angular/common/http';
import { PhyDialogComponent } from './physician-dashbard/phy-dialog/phy-dialog.component';

FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);
 
@NgModule({
  declarations: [
    PhysicianComponent,
      PhysicianSidebarComponent,
       PatientDetailsComponent,
      PhysicianinfoComponent,
      PhysicianDashbardComponent,
      PhyDialogComponent
     
    ],
    entryComponents:[
      PhyDialogComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    PhysicianRoutingModule, 
    ReactiveFormsModule,
    ChartsModule,
    FullCalendarModule,
    RouterModule,
    HttpClientModule
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
