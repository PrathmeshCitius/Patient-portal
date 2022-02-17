
import { Component,  ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-physician-dashbard',
  templateUrl: './physician-dashbard.component.html',
  styleUrls: ['./physician-dashbard.component.css']
})
export class PhysicianDashbardComponent  {

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

