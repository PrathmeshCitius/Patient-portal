import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-manage-physician-records',
  templateUrl: './manage-physician-records.component.html',
  styleUrls: ['./manage-physician-records.component.css']
})
export class ManagePhysicianRecordsComponent implements OnInit {

  constructor(private fb: FormBuilder, ) { }
  adminForm:FormGroup;
  dataSource!: MatTableDataSource<any>;
  onedit=false;
  onadd=true;
  displayedColumns: string[] = ['currentmedications', 'otc', 'hvma', 'socialdrugs','drugsallergies','otherallergies','actions'];
  ngOnInit(): void {
  }
  managePhysician(){}
  clearFields(){}
}
