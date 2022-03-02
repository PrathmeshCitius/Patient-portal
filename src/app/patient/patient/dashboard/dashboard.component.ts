//import 'chartjs-plugin-annotation';
import { ApiService } from '../../services/services';
import { GlobalService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { PatientService } from '../../patient.service';
import { TestBed } from '@angular/core/testing';
// declare let google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  name = 'Angular';
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions;
  lineChartColors: Color[];
  lineChartLegend;
  lineChartPlugins: [];
  lineChartType;

  //weight
  lineChartData1: ChartDataSets[];
  lineChartLabels1: Label[];
  lineChartOptions1;
  lineChartColors1: Color[];
  lineChartLegend1;
  lineChartPlugins1: [];
  lineChartType1;

  //pulse
  lineChartData2: ChartDataSets[];
  lineChartLabels2: Label[];
  lineChartOptions2;
  lineChartColors2: Color[];
  lineChartLegend2;
  lineChartPlugins2: [];
  lineChartType2;
  constructor(private api: ApiService, private globalService: GlobalService) { }

  ngOnInit(): void {
    // this.drawChart();

    this.api.getPhysicianData().subscribe(res => {
      console.log("Physician data into patient: ", res);

      //current login user email 
      var current_user: string = this.globalService.getUserInfo()[0].email;
      console.log("current User is: ", current_user);

      var result = res.filter(function (res_arg) {
        return res_arg.email == current_user;
      })

      // console.log('result', result)
      // console.log('name', result[0].name);

      this.plotChart(result);
      this.tempChart(result);
      this.pulseChart(result);
    });

  }



  //  drawChart() {
  //   google.charts.load('current', {'packages': ['bar']});
  //   google.charts.setOnLoadCallback(drawChart);

  //   function drawChart() {

  //     var data = google.visualization.arrayToDataTable([
  //       ['Patient Visits', 'BP(max)','BP(min)', 'Pulse', 'Respiration', 'Temperature', 'weight',
  //        { role: 'annotation' } ],
  //       ['visit-1', 130, 89, 20,60, 101, 189, ''],
  //       ['visit-2', 160, 98, 23,78, 99, 169, ''],
  //       ['visit-3', 135, 60, 29, 90,100, 178,'']
  //     ]);

  //     const options = {
  //       height: 400,
  //       isStacked: true,
  //       vAxis: {format: 'decimal'},
  //       hAxis: {format: ''},
  //       series: {
  //         0: {color: '#fdd835'},
  //         1: {color: '#0091ff'},
  //         2: {color: '#e53935'},
  //         3: {color: '#43a047'},
  //       }
  //     };

  //     const chart = new google.charts.Bar(document.querySelector('#initial_chart_div'));

  //     chart.draw(data, google.charts.Bar.convertOptions(options));
  //   }
  // }

  weight_data: any = [];
  latest_weight: any = [];

  // weight_data: any = [];
  // latest_weight:any = [];

  plotChart(result) {

    for (let i = 0; i < result.length; i++) {
      this.weight_data[i] = result[i].weight;
    }

    // console.log("flow", this.bp_data);
    this.latest_weight = this.weight_data.reverse();
    this.lineChartData = [
      { data: this.weight_data, label: 'Patient Last Three Visits - Patients Weight' },
    ];
    this.lineChartLabels = ['Latest', 'Second Latest', 'Third Latest'];
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

  temp_data: any = [];
  latest_temp: any = [];

  tempChart(result) {
    for (let i = 0; i < result.length; i++) {
      this.temp_data[i] = result[i].temp;
    }
    // console.log("flow", this.bp_data);
    this.latest_temp = this.temp_data.reverse();
    // console.log("rev-flow", this.latest_bp);

    this.lineChartData1 = [
      { data: this.temp_data, label: 'Patient Last Three Visits Temperature' },
    ];
    this.lineChartLabels1 = ['Latest', 'Second Latest', 'Third Latest'];
    this.lineChartOptions1 = {
      responsive: true,
    };
    this.lineChartColors1 = [
      {
        borderColor: 'black',
        backgroundColor: 'rgb(299,255,0)',
      },
    ];
    this.lineChartLegend1 = true;
    this.lineChartPlugins1 = [];
    this.lineChartType1 = 'line';
  }

  pulse_data: any = [];
  latest_pulse: any = [];
  pulseChart(result) {
    for (let i = 0; i < result.length; i++) {
      this.pulse_data[i] = result[i].pulse;
    }
    this.latest_pulse = this.pulse_data.reverse();
    this.lineChartData2 = [
      { data: this.pulse_data, label: 'Patient Last Three Visits Pulse Rate' },
    ];
    this.lineChartLabels2 = ['Latest', 'Second Latest', 'Third Latest'];
    this.lineChartOptions2 = {
      responsive: true,
    };
    this.lineChartColors2 = [
      {
        borderColor: 'black',
        backgroundColor: 'tomato',
      },
    ];
    this.lineChartLegend2 = true;
    this.lineChartPlugins2 = [];
    this.lineChartType2 = 'line';
  }
}


