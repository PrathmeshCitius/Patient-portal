import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validator,FormControl, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { PatientService } from 'src/app/patient/patient.service';
@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {
 // displayedColumns: string[] = ['meetingtitle', 'selectphysician', 'discription', 'time','date'];
  appointmentForm : FormGroup;
  constructor(private fb: FormBuilder, private patientService: PatientService) {}


  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      id:Number,
      meetingtitle: ['', Validators.required],
      selectphysician: ['', Validators.required],
      discription: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required]
    })
    this.getEvent();
  }

  onEvent() {
    if (this.appointmentForm.valid) {
      this.patientService.postEvent(this.appointmentForm.value).subscribe(res=>{
          this.getEvent();
          alert('Event added Successfully ');
        })
    }  
  }
  getEvent(){
     this.patientService.getEvent().subscribe(res=>{
       console.log("Events:",res);
     })}

}
