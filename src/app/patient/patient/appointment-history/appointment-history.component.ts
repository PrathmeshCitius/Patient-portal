import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  appointmentdate: string;
  physician: string;
  status: string;
  notes: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {appointmentdate: '22 march 2022', physician: 'Dr Chetan', status: 'Visited', notes: 'H'},
 
];

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['appointmentdate', 'physician', 'status', 'notes'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
