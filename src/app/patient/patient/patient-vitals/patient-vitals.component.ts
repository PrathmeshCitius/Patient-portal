import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Observer } from 'rxjs';
import { ApiService } from '../../services/services';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-patient-vitals',
  templateUrl: './patient-vitals.component.html',
  styleUrls: ['./patient-vitals.component.css']
})

export class PatientVitalsComponent implements OnInit {
  name = "John Doe";
  dataSource!: MatTableDataSource<any>;
  
  displayedColumns: string[] = ['bp', 'pulse', 'resp', 'temp', 'height', 'weight', 'action'];
  patient_details = [{
    patient_name: 'John Doe',
    email: 'john@gmail.com',
  }]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    
    this.api.getPhysicianData().subscribe(res => {
      console.log("Physician data into patient: ", res);
      this.dataSource = res;
    });
  }

  test: string = 'abc';
  // getPatientVital() {
  //   this.api.getPatientVital().subscribe(res => {
  //     this.dataSource = new MatTableDataSource(res);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //     console.log(this.dataSource)
  //     console.log("Get Response:", res);
  //   })
  // }
}



export class TabGroupBasicExample { }
export class IconOverviewExample { }



