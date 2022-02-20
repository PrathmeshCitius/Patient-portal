import { Component} from '@angular/core';


@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent 
  {
    chart:any;
    state: string = "show";
     constructor() { }
  
    showMe = true;
  
    showMeFun() { 
      setTimeout(() => {
        this.showMe = !this.showMe;
      }, 300);
  
}}
