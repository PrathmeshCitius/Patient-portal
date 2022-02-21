import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/services';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
interface Dname {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-immunization-details',
  templateUrl: './immunization-details.component.html',
  styleUrls: ['./immunization-details.component.css']
})
export class ImmunizationDetailsComponent implements OnInit {
  displayedColumns: string[] = ['vaccineName', 'doses', 'date', 'action'];
  dataSource!: MatTableDataSource<any>;
  onedit = false;
  onAdd = true;
  maxDate:string;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  immunizationForm: FormGroup; 

  constructor(private fb: FormBuilder, private api: ApiService, datePipe:DatePipe) {
    const dateFormat = 'yyyy-MM-dd';
    
    this.maxDate = datePipe.transform(new Date(), dateFormat);
   }
   doses:Dname[]=[
    {value: 'Dose 1', viewValue: 'Dose 1'},
    {value: 'Dose 2', viewValue: 'Dose 2'},
    {value: 'Dose 3', viewValue: 'Dose 3'},
    {value: 'Dose 4', viewValue: 'Dose 4'},
    {value: 'Dose 5', viewValue: 'Dose 5'},
  ];
  ngOnInit(): void {
    this.immunizationForm = this.fb.group({

      id: Number,
      vaccineName: ['', Validators.required,],
      doses: ['', Validators.required ],
      date: ['', Validators.required]
    })
    this.getImmunizationDetail();

    this.api.getPhysicianData().subscribe(res => {
      console.log("Physician data into patient: ", res);
    });
  }
  // addImmunizationDetails(){
  //   console.log(this.immunizationForm.value)
  // }

  addImmunizationDetail() {
    if (this.immunizationForm.valid) {
      console.log(this.immunizationForm.value)
      this.api.postImmunizationDetails(this.immunizationForm.value).subscribe({
        next: res => {
          this.getImmunizationDetail();
          alert('Patient Immunization added successfully')
        }
      })
      this.immunizationForm.reset();

    }
    else{
      alert("Please fill all the fields")
    }
  }
  getImmunizationDetail() {
    this.api.getImmunizationDetails().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    })
  }

  onEdit(data: any) {
    this.onedit = true;
    this.onAdd = false;
    this.immunizationForm.controls['id'].setValue(data.id);
    this.immunizationForm.controls['vaccineName'].setValue(data.vaccineName);
    this.immunizationForm.controls['doses'].setValue(data.doses);
    this.immunizationForm.controls['date'].setValue(data.date);
  }

  UpdateImmunizationDetail() {
    this.api.updateImmunizationDetails(this.immunizationForm.value.id, this.immunizationForm.value).subscribe(res => {
      this.getImmunizationDetail();
      this.immunizationForm.reset();
      this.onedit = false;
      this.onAdd = true;
      alert("data updated successfully");
    })
  }

  onDelete(data: any) {
    this.api.deleteImmunizationDetails(data.id).subscribe(res => {
      this.getImmunizationDetail();
      alert("Row Deleted Successfully");
    })
  }
  clearFields() {
    this.immunizationForm.reset();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
