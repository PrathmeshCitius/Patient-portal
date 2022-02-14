import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhysicianService } from '../physician.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})

export class PatientDetailsComponent implements OnInit {

  patientVitalForm: FormGroup
  displayedColumns: string[] = ['name', 'bp', 'pulse', 'resp', 'temp', 'height', 'weight', 'action'];
  dataSource!: MatTableDataSource<any>;
  onedit = false;
  onAdd = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api: PhysicianService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.patientVitalForm = this.fb.group({
      name: [''],
      bp: [''],
      pulse: [''],
      resp: [''],
      temp: [''],
      height: [''],
      weight: [''],
      id: [''],
    })
    this.getPatientVital()
  }

  addPatientVital() {
    this.api.postPatientVital(this.patientVitalForm.value).subscribe(res => {
      this.getPatientVital();
      this.patientVitalForm.reset();
      alert("data addedd sucessfully");
      console.log(res);
    })
  }

  getPatientVital() {
    this.api.getPatientVital().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
      console.log("Get Response:", res);
    })
  }

  onEdit(data: any) {
    this.onedit = true;
    this.onAdd = true;
    this.patientVitalForm.controls['name'].setValue(data.bp);
    this.patientVitalForm.controls['bp'].setValue(data.bp);
    this.patientVitalForm.controls['pulse'].setValue(data.pulse);
    this.patientVitalForm.controls['resp'].setValue(data.resp);
    this.patientVitalForm.controls['temp'].setValue(data.temp);
    this.patientVitalForm.controls['height'].setValue(data.height);
    this.patientVitalForm.controls['weight'].setValue(data.weight);
    this.patientVitalForm.controls['id'].setValue(data.id);
  }

  updatePostPatientVital1(){
    console.log("Updated Values:", this.patientVitalForm.value)
    this.api.updatePostPatientVital(this.patientVitalForm.value.id,this.patientVitalForm.value).subscribe(res=>{
      this.getPatientVital();
      this.patientVitalForm.reset();
      // this.onedit=false;
      // this.onAdd=true;
      alert("data updated successfully");
    })
  }
  onDelete(data: any) {
    this.api.deletePostPatientVital(data.id).subscribe(res => {
      this.getPatientVital();
      alert("Row Deleted Successfully");
    })
  }


  clearFields() {
    this.patientVitalForm.reset();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
