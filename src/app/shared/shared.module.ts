import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { LandingComponent } from './navigation/landing/landing.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { MaterialModule } from './material/material.module';


const P_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true,
  minScrollbarLength: 80
};

@NgModule({
  declarations: [HeaderComponent, LandingComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    MaterialModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: P_SCROLLBAR_CONFIG
  }],
  exports: [LandingComponent,
    HeaderComponent, MaterialModule
  ]
})
export class SharedModule { }
