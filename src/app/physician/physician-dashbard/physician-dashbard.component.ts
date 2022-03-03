
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/patient/patient.service';
import { SSF } from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { PhyDialogComponent } from './phy-dialog/phy-dialog.component';

@Component({
  selector: 'app-physician-dashbard',
  templateUrl: './physician-dashbard.component.html',
  styleUrls: ['./physician-dashbard.component.css']
})
export class PhysicianDashbardComponent implements OnInit{
  events: any=[];
  //data:any[]=[]
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    // events:[
    //   {'title':'Mahashivratri', 'date':'2022-03-22'}
    // ],
    //eventColor:"pink",
  
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  constructor(private httpClient: HttpClient, private PatientService:PatientService,
    public dialog:MatDialog) {
  }
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  
 ngOnInit() {
 // this.showEvents();
// let eventsdata;
  const getData = this.showEvents()
getData.subscribe((eventsone:any)=>{
  console.log("Prinu", eventsone);
  //eventsdata = eventsone;
  this.calendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.onDateClick.bind(this),
    events :eventsone,
   // eventClick: this.openDialog,
   }
   console.log("Calendar options", this.calendarOptions)
})
}
// openDialog(){
//   //alert("Snehal");
//   this.dialog.open('PhyDialogComponent',)
// }
 showEvents(){
   setTimeout(()=>{
    this.PatientService.getEvents().subscribe((res)=>{
    //this.events= res;
    res.forEach(i=>{
      console.log("i",i)
      const newEvent = {
        "title": i.Subject,
      "date":  i.StartTime
       }
       this.events.push(newEvent)
    })
     // console.log("aaaaaaaaaaaaaa",this.events)
  })
   },500)
   const scheduleObservable = new Observable(observer => {
    setTimeout(() => {
      observer.next(this.events);
    }, 1000);
  });
   return scheduleObservable;
 
   }
  }
  
