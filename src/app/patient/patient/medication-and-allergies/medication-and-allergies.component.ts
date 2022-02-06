import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-medication-and-allergies',
  templateUrl: './medication-and-allergies.component.html',
  styleUrls: ['./medication-and-allergies.component.css'],
})
export class MedicationAndAllergiesComponent implements OnInit {
  // [x: string]: any;
  medicationForm !: FormGroup;

  displayedColumns: string[] = [
    'currentmedications',
    'otc',
    'hvma',
    'socialdrugs',
    'drugsandallergies',
    'otherallergies',
  ];
  // dataSource!: MatTableDataSource<any>;
  // @ViewChild(MatPaginator) paginator! : MatPaginator;
  // @ViewChild(MatSort) sort! : MatSort;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.medicationForm = this.fb.group({
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
      this.api.postMedication(this.medicationForm.value).subscribe({
        next: (res) => {
          alert('Added Successfully ');

          this.medicationForm.reset;
        },
          error: () => {
          alert('Errow while adding');
        }
      });
    }  
  }
  getAllMedication(){
     this.api.getMedication().subscribe({
        next:(res)=>{
       console.log(res);
      },
      error:(err)=>{
       alert("Hi")
      }
    })
 }
}
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

