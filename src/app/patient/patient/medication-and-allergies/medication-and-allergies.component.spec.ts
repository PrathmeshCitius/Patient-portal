import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationAndAllergiesComponent } from './medication-and-allergies.component';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import{RouterTestingModule} from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



describe('MedicationAndAllergiesComponent', () => {
  let component: MedicationAndAllergiesComponent;
  let fixture: ComponentFixture<MedicationAndAllergiesComponent>;
 
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule,FormsModule,
        RouterTestingModule.withRoutes([]),
    
      ],
      declarations: [ MedicationAndAllergiesComponent ],
      providers: [  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationAndAllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
