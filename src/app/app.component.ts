import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { GlobalService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Patient-portal';
  name1 = "abc";
  userInfo: any;
  // users=[{'id':1,"name":"abc"}];
  constructor(private api:GlobalService)
{}

  ngOnInit(): void {}


 

  

    
  
}
