import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { LandingComponent } from './navigation/landing/landing.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';

import { PerfectScrollbarConfigInterface, PerfectScrollbarModule,PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';  
  
const P_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {  
  suppressScrollX: true,
  wheelPropagation:true,
  minScrollbarLength:80
};  

@NgModule({
  declarations: [HeaderComponent, LandingComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
     useValue: P_SCROLLBAR_CONFIG
  }],
  exports:[LandingComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
