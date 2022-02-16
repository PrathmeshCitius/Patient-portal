import { Component, OnInit } from '@angular/core';
// import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  chart:any;
   constructor() { }

  ngOnInit(): void {
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


