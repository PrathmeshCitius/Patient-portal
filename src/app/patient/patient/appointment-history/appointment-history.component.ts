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

  displayedColumns: string[] = ['apppintmentDate', 'physician', 'status', 'notes'];
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
      this.dataSource=res;
      console.log("app history datasource", this.dataSource)
    })
  }
  // onViewClick(){
  //   this.router.navigate['appointment-history/appointment-detail']
  //   console.log("on view click function")
  // }
}
