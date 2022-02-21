import { Component, OnInit} from '@angular/core';
import { GlobalService } from 'src/app/services/api.service';


@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent implements OnInit
  {
    chart:any;
    physicianId:any;
    physicianEmail:any;
    state: string = "show";
     constructor(private api:GlobalService) { }
  
    showMe = true;
  
    showMeFun() { 
      setTimeout(() => {
        this.showMe = !this.showMe;
      }, 300);
    }

ngOnInit(): void {
  this.api.setLoggedInUser().subscribe((res) => {

    this.physicianId = res[0].userId;

    this.physicianEmail = res[0].email;

 
  })
}
}
