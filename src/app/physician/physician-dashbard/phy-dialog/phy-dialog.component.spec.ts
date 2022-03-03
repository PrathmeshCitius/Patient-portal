import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyDialogComponent } from './phy-dialog.component';

describe('PhyDialogComponent', () => {
  let component: PhyDialogComponent;
  let fixture: ComponentFixture<PhyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
