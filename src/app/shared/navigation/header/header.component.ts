import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  disableSelect = new FormControl();
  constructor(
    private route:ActivatedRoute,
    private router: Router
  ) {console.log("Sujith", route);   }

  ngOnInit(): void {
  }

  logOut(){
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/auth/login');
  }

}
