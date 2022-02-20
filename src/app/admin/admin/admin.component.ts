import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  

  
  ngOnInit(): void {
      
  }
 
}
