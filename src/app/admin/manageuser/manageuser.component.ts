import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})




export class ManageuserComponent implements OnInit {

   USER_INFO = [
    {"name": "John Smith", "occupation": "Advisor", "age": 36},
    {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
    {"name": "Peter Adams", "occupation": "HR", "age": 20},
    {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
  ];

  constructor() { }

 
  displayedColumns: string[] = ['name', 'occupation', 'age'];
  dataSource ;

  ngOnInit(): void {
    this.dataSource = this.USER_INFO;
console.log(this.dataSource)
    
  }



}
