import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/patient/services/services';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
aId;
appointmentDetail;
  constructor( private activatedRoutes:ActivatedRoute, private api:ApiService) {
    this.aId= this.activatedRoutes.snapshot.params['id']
    console.log("appointment ID", this.aId)
   }

  ngOnInit(): void {
this.api.getDetailById(this.aId).subscribe(res=>{
  this.appointmentDetail=res;
  console.log("111111111", this.appointmentDetail)
})
  }

}
