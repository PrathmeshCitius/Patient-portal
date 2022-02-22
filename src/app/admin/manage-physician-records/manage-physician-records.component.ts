import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/patient/services/services';
import { AdminService } from '../admin.service';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-manage-physician-records',
  templateUrl: './manage-physician-records.component.html',
  styleUrls: ['./manage-physician-records.component.css']
})
export class ManagePhysicianRecordsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['Name', 'Email', 'Speciality'];
  dataSource!: MatTableDataSource<any>;
  
  immunizationForm: FormGroup;


  constructor(private fb: FormBuilder, private api: AdminService,  public dialog: MatDialog,
    ) { }
    

  ngOnInit(): void {

    this.getImmunizationDetail();
  }

  getImmunizationDetail() {
    
    this.api.getPhysicianRecord().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res.filter(person => person.role === 'physician'));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
      
  }


  openFormDialog(){

    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: 'auto',
      // data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
   
      if(result.event == 'Ok'){
        this.getImmunizationDetail()

      }
      });
  }



}
