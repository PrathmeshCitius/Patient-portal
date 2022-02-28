import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate, keyframes } from "@angular/animations";
import { GlobalService } from 'src/app/services/api.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  // animations: [trigger("sideNavAnimation",[
  //   state('hide', style({display: 'none'})), 
  //   state('show', style({display: 'block'})),
  //   transition('hide<=>show', animate( '900ms ease-in'))
  // ])]
})
export class PatientComponent implements OnInit {
  chart: any;
  state: string = "show";
  logArr:any=[];
  patientId: any;
  patientEmail:any;
  patientImage:any;
  constructor(private api: GlobalService) {


  }

  showMe = true;

  showMeFun() { 
    setTimeout(() => {
      this.showMe = !this.showMe;
    }, 300);

    // this.state = (this.state === "show" ? "hide":"show")

  }

  ngOnInit(): void {
    
    this.api.setLoggedInUser().subscribe((res) => {
this.logArr =res;
if(this.logArr.length == 1){
      this.patientId = res[0].userId;
      this.patientEmail = res[0].email;
      this.patientImage=res[0].image;
}
else
{
  this.patientId = res[this.logArr.length-1].userId;
  this.patientEmail = res[this.logArr.length-1].email;
  this.patientImage=res[this.logArr.length-1].image;
}
    });
   
  }
 
}


