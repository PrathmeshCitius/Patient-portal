//import { Component, OnInit} from '@angular/core';
import { DataManager,WebApiAdaptor} from '@syncfusion/ej2-data';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View, EventSettingsModel, GroupModel, TimelineViewsService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Type, ViewChild, ViewEncapsulation } from "@angular/core";
import { Ajax } from "@syncfusion/ej2-base";
import { PatientService } from '../../patient.service';
import { ScheduleData } from "../../schedule.model";
import { extend, Internationalization } from "@syncfusion/ej2-base";
import { employeeEventData } from '../../data';
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { PopupOpenEventArgs, ScheduleComponent, CurrentAction } from "@syncfusion/ej2-angular-schedule";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
@Component({
  selector: 'app-schedule-appointment',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,TimelineViewsService, AgendaService, ResizeService, DragAndDropService],
 
  //template:`<ejs-schedule height="100vh" [currentView]="setView" [selectedDate]='setDate' [eventSettings]='eventObject' ></ejs-schedule>`,
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleAppointmentComponent implements OnInit {
  constructor( public dialog: MatDialog,private scheduleService:  PatientService){}
  public setView:View="Month";
 
@ViewChild("scheduleObj") public scheduleObj: ScheduleComponent;
students: ScheduleData[] = [];
public selectedDate: Date = new Date(2022, 1, 17);
private selectionTarget: Element;





public group: GroupModel = {
      resources: [ 'Categories']
  };
public eventSettings: EventSettingsModel;
public categoryDataSource: Object[] = [
      
  ];


  
 openDialog(): void {
  let dialogRef=this.dialog.open(AppointmentDialogComponent);
  dialogRef.afterClosed().subscribe(result=>{
    console.log("Dialog result",result);
   if(result)
   {
     this.getEvents();
   }
  })

}

ngOnInit() {
    this.getEvents();

  }
  onActionComplete(args): void {
    if (args.requestType === "dateNavigate") {
      this.getEvents();
    }
  }

  getEvents() {
    const studentsObservable = this.scheduleService.getSchedule();
    console.log(studentsObservable);
    studentsObservable.subscribe((scheduleData: ScheduleData[]) => {
      let initialData: Object[] = <Object[]>(
        extend([], this.scheduleObj.eventSettings.dataSource, null, true)
      );
      console.log(scheduleData);
      scheduleData.forEach(element => {
        console.log(element);
          initialData.push(element);
      
      });
     
      this.eventSettings = {
     
        dataSource: initialData
      };
      console.log(this.eventSettings)
    });
  }
  
  
}

