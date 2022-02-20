import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {


  showMyContainer;
  constructor() { }
  @Input() patientId;
  @Input() patientEmail;
  ngOnInit(): void {
  
    
  }

  

}
