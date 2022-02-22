import 'chartjs-plugin-annotation';

import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { PatientService } from '../../patient.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions;
  lineChartColors: Color[];
  lineChartLegend;
  lineChartPlugins: [];
  lineChartType;

  constructor(private patientService: PatientService) {
    //this.getFromEventlist();}
  }
  count: number = 0;
  countone: number = 0;
  ngOnInit() {
    this.getFromEventlist();
  }

  getFromEventlist() {
    this.patientService.getdoctorsFromEventlist().subscribe((res) => {
      const result = res.filter((x) =>
        x.selectphysician.match('Dr Chetan Jaiswal')
      );
      console.log('lengthchetan', result.length);
      this.count = result.length;

      const result1 = res.filter((x) =>
        x.selectphysician.match('Dr Satish Shah')
      );
      console.log('lengthsatish', result1.length);
      this.countone = result1.length;
      
      this.chart();
    });
  }
  chart() {
    this.lineChartData = [
      { data: [this.count, 5, this.countone], label: 'Patient visits' },
    ];
    this.lineChartLabels = ['Dr Chetan Jaiswal', 'ran', 'Dr Satish Shah'];
    this.lineChartOptions = {
      responsive: true,
    };
    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgb(127,255,0)',
      },
    ];
    this.lineChartLegend = true;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';
  }
  ///////////////////////////////////////////////////////
  lineChartData1: ChartDataSets[] = [
    { data: [0,3,4,6,1,2,1], label: 'Patient visits' },
  ];
  lineChartLabels1: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  lineChartOptions1 = {
    responsive: true,
  };
  lineChartColors1: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(255,20,147)',
    },
  ];
  lineChartLegend1 = true;
  lineChartPlugins1 = [];
  lineChartType1 = 'bar';
  // /////////////////////////////////////////////////////////
  // lineChartData2: ChartDataSets[] = [
  //   { data: [0,3,4,6,1,2,1], label: 'Patient visits' },
  // ];
  // lineChartLabels2: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  // lineChartOptions2 = {
  //   responsive: true,
  // };
  // lineChartColors2: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: '#eee',
  //   },
  // ];
  // lineChartLegend2 = true;
  // lineChartPlugins2 = [];
  // lineChartType2 = 'doughnut';

  // /////////////////////////////////////////////////////////
  // lineChartData3: ChartDataSets[] = [
  //   { data: [0,3,4,6,1,2,1], label: 'Patient visits' },
  // ];
  // lineChartLabels3: Label[] = [];
  // lineChartOptions3 = {
  //   responsive: true,
  // };
  // lineChartColors3: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgb(0,191,255)',
  //   },
  // ];
  // lineChartLegend3 = true;
  // lineChartPlugins3 = [];
  // lineChartType3 = 'pie';
  // }
  // //////////////////////////////////////////////////////
}
