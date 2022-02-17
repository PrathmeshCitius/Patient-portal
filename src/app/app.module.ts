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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PhysicianService } from './physician/physician.service';
import { ToastrModule } from 'ngx-toastr';
import { AppointmentDialogComponent } from './patient/patient/schedule-appointment/appointment-dialog/appointment-dialog.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { FakeBackendInterceptor } from './helpers/fakebackend.interceptor';
import { ChartsModule } from 'ng2-charts';
import { PhysicianComponent } from './physician/physician/physician.component';
import { PhysicianSidebarComponent } from './physician/physician-sidebar/physician-sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { HeaderComponent } from './shared/navigation/header/header.component';


const P_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {

  suppressScrollX: true,
  wheelPropagation: true,
  minScrollbarLength: 80
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  schemas: [],


  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    AppRoutingModule,
    PatientModule,
    PhysicianModule,
    SharedModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule,
    PerfectScrollbarModule,
    PhysicianModule,
    SharedModule,
    BrowserAnimationsModule,
    AdminModule,
    PerfectScrollbarModule,
    ToastrModule.forRoot(),
    ChartsModule,
  
    BrowserAnimationsModule,
    MatToolbarModule
  ],

  providers: [PhysicianService, {
    provide: PERFECT_SCROLLBAR_CONFIG, 
    useValue: P_SCROLLBAR_CONFIG, 
  },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
],
 exports:[ PhysicianComponent,
  PhysicianSidebarComponent,
HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
