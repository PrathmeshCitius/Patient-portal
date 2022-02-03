import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physician-sidebar',
  templateUrl: './physician-sidebar.component.html',
  styleUrls: ['./physician-sidebar.component.css']
})
export class PhysicianSidebarComponent implements OnInit {

  constructor() { }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  ngOnInit(): void {
  }

}
