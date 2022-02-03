import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { PhysicianModule } from './physician/physician.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatButtonModule,     PatientModule,
      PhysicianModule,
      AdminModule,
      SharedModule,
      BrowserAnimationsModule,
   
      AdminModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatCardModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
