import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { PhysicianModule } from './physician/physician.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    AppRoutingModule,

     PatientModule,
      PhysicianModule,
      AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
