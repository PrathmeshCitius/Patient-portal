import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsComponent } from './demographics.component';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import{RouterTestingModule} from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DemographicsComponent', () => {
  let component: DemographicsComponent;
  let fixture: ComponentFixture<DemographicsComponent>;
 
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule,FormsModule,
        RouterTestingModule.withRoutes([]),
    ],
      declarations: [ DemographicsComponent ],
      providers: [  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
