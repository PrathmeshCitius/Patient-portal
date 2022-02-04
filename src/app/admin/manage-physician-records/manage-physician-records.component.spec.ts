import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePhysicianRecordsComponent } from './manage-physician-records.component';

describe('ManagePhysicianRecordsComponent', () => {
  let component: ManagePhysicianRecordsComponent;
  let fixture: ComponentFixture<ManagePhysicianRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePhysicianRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePhysicianRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
