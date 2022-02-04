import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-patient-vitals',
  templateUrl: './patient-vitals.component.html',
  styleUrls: ['./patient-vitals.component.css']
})

export class PatientVitalsComponent implements OnInit {
  name = "John Doe";

  patient_details = [{
    patient_name: 'John Doe',
    email: 'john@gmail.com',
  }]

  ngOnInit(): void {
  }

  test: string = 'abc';

}

export class TabGroupBasicExample { }
export class IconOverviewExample { }



