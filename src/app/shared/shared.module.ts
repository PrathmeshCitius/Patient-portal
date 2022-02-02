import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { LandingComponent } from './navigation/landing/landing.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, LandingComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  // exports:[LandingComponent]
})
export class SharedModule { }
