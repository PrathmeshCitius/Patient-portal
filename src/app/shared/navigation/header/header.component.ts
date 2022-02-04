import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  disableSelect = new FormControl();
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.router.navigateByUrl('/auth/login');
  }

}
