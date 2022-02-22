import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder,Validator,FormControl, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { PatientService } from 'src/app/patient/patient.service';
import { DateTimePickerComponent, DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";



interface Dname {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {
 // displayedColumns: string[] = ['meetingtitle', 'selectphysician', 'discription', 'time','date'];
  appointmentForm : FormGroup;
  @ViewChild('ejDateTimePicker') ejDateTimePicker: DateTimePickerComponent;
public placeholder: String = 'Select Date & Time';

  dnames:Dname[]=[
    {value: 'Dr Chetan Jaiswal', viewValue: 'Dr Chetan Jaiswal'},
    {value: 'Dr Satish Shah', viewValue: 'Dr Satish Shah'},
    {value: 'Dr RajKumar', viewValue: 'Dr RajKumar'},
  ];
  constructor(private fb: FormBuilder, private patientService: PatientService) {}


  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      Id:Number,
      Subject: ['', Validators.required],
      selectphysician: ['', Validators.required],
      discription: ['', Validators.required],
      //time: ['', Validators.required],
      StartTime: [''],
      EndTime:[''],
    status:['']
    })
 
  }

  onEvent() {
    //this.appointmentForm.value.StartTime="Fri Feb 19 2022 09:00:00 GMT+0530 (India Standard Time)";
    this.appointmentForm.value.status="Pending";
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm)
      this.patientService.postEvent(this.appointmentForm.value).subscribe(res=>{
          
          alert('Event added Successfully ');
        })
    }  
  }
  getEvent(){
     this.patientService.getEvent().subscribe(res=>{
       console.log("Events:",res);
     })}

}
