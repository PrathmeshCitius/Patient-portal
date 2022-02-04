import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {
  demographicForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.demographicForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      name: ['']
    });
  }

  ngOnInit(): void {
  }

}
