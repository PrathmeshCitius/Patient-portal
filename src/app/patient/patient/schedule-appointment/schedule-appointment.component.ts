import { Component, OnInit, Inject, ElementRef, ViewChild, VERSION} from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {
  Events:any = [];
  calendarOptions:CalendarOptions;
  @ViewChild('calendar', {static: true}) calendar: ElementRef<any>
  name = 'Angular ' + VERSION.major;
  constructor(private httpClient: HttpClient, public dialog: MatDialog,) { }
  // onDateClick(res) {
  //   alert('Clicked on date : ' + res.dateStr)
  // }

  ngOnInit(): void {
    this.callCalendar();   
}
callCalendar(){
  setTimeout(() => {
    this.httpClient.get('http://localhost:3000/eventList')
       .subscribe(res => {
           this.Events =res;
            // console.log("1111111",this.Events);
         });
        }, 500);

    var calendarEl = this.calendar.nativeElement
    setTimeout(() => {
    var calendar = new Calendar(calendarEl, { 
      initialView: 'timeGridWeek',
      
      initialDate: '2022-01-01',       
      plugins: [
        dayGridPlugin,
        timeGridPlugin
      ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay', 
      },
      events: this.Events
    });
    calendar.render();
  },1000);
}
    openDialog(): void {
      let dialogRef=this.dialog.open(AppointmentDialogComponent);
      dialogRef.afterClosed().subscribe(result=>{
        console.log("Dialog result",result);
      })
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      this.callCalendar();
      });
    }
  }
  


