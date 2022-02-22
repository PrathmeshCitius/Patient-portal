import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/services';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {

  displayedColumns: string[] = ['StartTime', 'selectphysician', 'status', 'discription'];
  dataSource!: MatTableDataSource<any>;
  onedit=false;
  onAdd=true;
  aId;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  
  constructor(private api:ApiService, private router: Router, private activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.getAppoHistory();
  }

  getAppoHistory(){
    this.api.getAppointmentHistory().subscribe(res=>{
      console.log("appointment History Resp", res)
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log("app history datasource", this.dataSource)
    })
  }
  // onViewClick(){
  //   this.router.navigate['appointment-history/appointment-detail']
  //   console.log("on view click function")
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
