import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-physician-sidebar',
  templateUrl: './physician-sidebar.component.html',
  styleUrls: ['./physician-sidebar.component.css']
})
export class PhysicianSidebarComponent implements OnInit {

 @Input() physicianId;
 @Input() physicianEmail;

  constructor() { }
 
  ngOnInit(): void {
  
  }

}
