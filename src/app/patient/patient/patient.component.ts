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
  patientId: any;
  patientEmail:any;
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
      this.patientId = res[0].userId;
      this.patientEmail = res[0].email;
    
    });
    // this.patientId = this.api.getUserInfo()
    // console.log(this.patientId);

    

    // this.chart= document.getElementById ('dashboard-chat')
    //   Chart.register(...registerables);
    //   this.loadChart();
  }
  // loadChart(): void{
  //   new Chart(this.chart, {
  //     type:'line',
  //     data:{
  //       datasets:[
  //         {
  //         data: ['Red', 'Blue', 'Yellow', 'Green', 'Purple','abc'],
  //         label:'Series 1',
  //         backgroundColor:"007bff",
  //         tension:0.2,
  //       }
  //     ],
  //       labels:[
  //         '11th',
  //         '12th',
  //         '13th',
  //         '14th',
  //         '15th',
  //         '16th',
  //       ]
  //     }

  //   });
  // }
}


