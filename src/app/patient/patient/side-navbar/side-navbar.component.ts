import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  showMe:boolean = true;
  toggleSidebar(){
    this.showMe = !this.showMe;
  }

  patientId: number;
  showMyContainer;
  constructor() { }

  ngOnInit(): void {

    
    const user = JSON.parse(localStorage.getItem("currentUser"));
    this.patientId = user.user.id;
  }

}
