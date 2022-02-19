import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhysicianService } from '../physician.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
export interface PeriodicElement {
  appdate: string;
  patientname:string;
  title:string;
  status:string;
  appointment:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {appdate: "1/1/22", patientname: 'Prathmesh', title: 'Fever check', status: 'Done',appointment:'view'},

];
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})

export class PatientDetailsComponent implements OnInit {
  date = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');
  displayedColumns: string[] = ['appdate', 'patientname', 'title', 'status', 'appointment'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
 


