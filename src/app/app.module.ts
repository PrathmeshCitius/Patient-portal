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
import { ChartsModule } from 'ng2-charts';
import { PhysicianService } from './physician/physician.service';
import { ToastrModule } from 'ngx-toastr';
import { AppointmentDialogComponent } from './patient/patient/schedule-appointment/appointment-dialog/appointment-dialog.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/navigation/header/header.component';
import { GlobalService } from './services/api.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NavbarComponent } from './mainpage/navbar/navbar.component';
import { ContentComponent } from './mainpage/content/content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './shared/material/material.module';
//import { PhysicianDialogComponent } from './physician-dashbard/physician-dialog/physician-dialog.component';
const P_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {

  suppressScrollX: true,
  wheelPropagation: true,
  minScrollbarLength: 80
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
   
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
    ChartsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    FlexLayoutModule,
    ScheduleModule ,
    DateTimePickerModule ,
    NgbModule,
    MaterialModule ,
    MatButtonModule,
    MatToolbarModule
  ],

  providers: [PhysicianService,GlobalService,{
    provide: PERFECT_SCROLLBAR_CONFIG, 
    useValue: P_SCROLLBAR_CONFIG, 
  },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

],
 exports:[
HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
