import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../../patient.service';
//import { ApiService } from '../../services/services';
import { GlobalService } from 'src/app/services/api.service';

@Component({
  selector: 'app-medication-and-allergies',
  templateUrl: './medication-and-allergies.component.html',
  styleUrls: ['./medication-and-allergies.component.css'],
})
export class MedicationAndAllergiesComponent implements OnInit {
  pId: any;
  displayedColumns: string[] = [
    'currentmedications',
    'otc',
    'hvma',
    'socialdrugs',
    'drugsallergies',
    'otherallergies',
    'actions',

  ];
  dataSource!: MatTableDataSource<any>;
  onedit = false;
  onadd = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // [x: string]: any;

  medicationForm: FormGroup;
  activatedRoute: any;
  medications: any;

  constructor(private fb: FormBuilder,private patientService: PatientService ,
     private gs:GlobalService) {
    // this.pId = this.activatedRoute.snapshot.paramMap.get('id');
    // if (this.pId) {
    //   this.getAllMedication();
  }

  ngOnInit(): void {
    this.medicationForm = this.fb.group({
      id: Number,
      currentmedications: ['', Validators.required],
      otc: ['', Validators.required],
      hvma: ['', Validators.required],
      socialdrugs: ['', Validators.required],
      drugsallergies: ['', Validators.required],
      otherallergies: ['', Validators.required],
      
    });
    this.getAllMedication();
  }

  addMnA() {
    if (this.medicationForm.valid) {
      this.patientService
        .postMedication({...this.medicationForm.value,userId:+localStorage.getItem('currentUserId')})
        .subscribe((res) => {
          this.getAllMedication();
          alert('Added Successfully ');
        })
    }
    this.clearFields();
  }
  getAllMedication() {
    this.patientService.getMedication().subscribe((res) => {
      console.log("GET USER INFO",localStorage.getItem('currentUserId') );
      this.medications = res.filter((temp) => {
        return temp.userId === +localStorage.getItem('currentUserId')
      });
      this.dataSource = new MatTableDataSource(this.medications);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onEdit(row: any) {
    this.onedit = true;
    this.onadd = false;
    this.medicationForm.controls['id'].setValue(row.id);
    this.medicationForm.controls['currentmedications'].setValue(
      row.currentmedications
    );
    this.medicationForm.controls['otc'].setValue(row.otc);
    this.medicationForm.controls['hvma'].setValue(row.hvma);
    this.medicationForm.controls['socialdrugs'].setValue(row.socialdrugs);
    this.medicationForm.controls['drugsallergies'].setValue(row.drugsallergies);
    this.medicationForm.controls['otherallergies'].setValue(row.otherallergies);
  }

  updateMedication() {
    this.patientService
      .updateMedication(this.medicationForm.value.id, this.medicationForm.value)
      .subscribe((res) => {
        // console.log("editied data",res)
        this.getAllMedication();
        this.medicationForm.reset();
        this.onedit = false;
        this.onadd = true;
        alert('Data updated successfully');
      });
  }

  onDelete(row: any) {
    this.patientService.deleteMedication(row.id).subscribe((res) => {
      this.getAllMedication();
      alert('Data deleted successfully');
    });
  }

  clearFields() {
    this.medicationForm.reset();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
