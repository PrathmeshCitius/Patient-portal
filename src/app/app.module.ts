import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { PhysicianModule } from './physician/physician.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


// import { MatCardModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],


  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    AppRoutingModule,
     PatientModule,
      PhysicianModule,
      AdminModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
