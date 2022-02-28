//import 'chartjs-plugin-annotation';

import { Component, OnInit } from '@angular/core';
//import { ChartDataSets } from 'chart.js';
//import { Label, Color } from 'ng2-charts';
import { PatientService } from '../../patient.service';
declare let google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  name = 'Angular';
  ngOnInit(): void {
    this.drawChart();
   
  }
   drawChart() {
    google.charts.load('current', {'packages': ['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Patient Visits', 'BP(max)','BP(min)', 'Pulse', 'Respiration', 'Temperature', 'weight',
         { role: 'annotation' } ],
        ['visit-1', 130, 89, 20,60, 101, 189, ''],
        ['visit-2', 160, 98, 23,78, 99, 169, ''],
        ['visit-3', 135, 60, 29, 90,100, 178,'']
      ]);

      const options = {
        height: 400,
        isStacked: true,
        vAxis: {format: 'decimal'},
        hAxis: {format: ''},
        series: {
          0: {color: '#fdd835'},
          1: {color: '#0091ff'},
          2: {color: '#e53935'},
          3: {color: '#43a047'},
        }
      };

      const chart = new google.charts.Bar(document.querySelector('#initial_chart_div'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}
