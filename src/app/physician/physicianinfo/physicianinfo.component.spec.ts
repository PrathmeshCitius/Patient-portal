//  import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PhysicianinfoComponent } from './physicianinfo.component';

// describe('PhysicianinfoComponent', () => {
//   let component: PhysicianinfoComponent;
//   let fixture: ComponentFixture<PhysicianinfoComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ PhysicianinfoComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PhysicianinfoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianinfoComponent } from './physicianinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('PhysicianinfoComponent', () => {
  let component: PhysicianinfoComponent;
  let fixture: ComponentFixture<PhysicianinfoComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule],
      declarations: [ PhysicianinfoComponent ],
      providers: [ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

