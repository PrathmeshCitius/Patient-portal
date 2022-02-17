import 'chartjs-plugin-annotation';

import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label , Color} from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
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


/////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////
lineChartData2: ChartDataSets[] = [
  { data: [0,3,4,6,1,2,1], label: 'Patient visits' },
];
lineChartLabels2: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
lineChartOptions2 = {
  responsive: true,
};
lineChartColors2: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: '#eee',
  },
];
lineChartLegend2 = true;
lineChartPlugins2 = [];
lineChartType2 = 'doughnut';


/////////////////////////////////////////////////////////
lineChartData3: ChartDataSets[] = [
  { data: [0,3,4,6,1,2,1], label: 'Patient visits' },
];
lineChartLabels3: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
lineChartOptions3 = {
  responsive: true,
};
lineChartColors3: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgb(0,191,255)',
  },
];
lineChartLegend3 = true;
lineChartPlugins3 = [];
lineChartType3 = 'pie';
}
//////////////////////////////////////////////////////
