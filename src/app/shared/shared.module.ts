import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { LandingComponent } from './navigation/landing/landing.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [HeaderComponent, LandingComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule
  ],
  exports:[LandingComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
