import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Patient-portal';
  name1 = "abc";

  // users=[{'id':1,"name":"abc"}];
  constructor(
    private route:Router
  ){}

  ngOnInit(): void {
  
    // this.route.navigate(['/','physician']);
  }

    
  
}
