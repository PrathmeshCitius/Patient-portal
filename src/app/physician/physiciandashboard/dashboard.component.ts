
import { Component,  ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    selected: Date | null;
  
    @ViewChild("lineChart", { static: false }) lineChart: any;
    lineChartData: ChartDataSets[] = [
      { data: [0,3,4,6,1,2,1], label: 'Patient visits' },
    ];
    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
    lineChartOptions = {
      responsive: true,
    };
    lineChartColors: Color[] = [
      {
        borderColor: 'black',
        backgroundColor: 'rgb(127,255,0)',
      },
    ];
    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';
    
  
  }

