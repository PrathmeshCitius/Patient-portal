import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  immunizationForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.immunizationForm= this.fb.group({
      vaccineName:['', Validators.required],
      doses:['', Validators.required],
      date:['', Validators.required]
    })
  }
  addImmunizationDetails(){
    console.log(this.immunizationForm.value)
  }
}
