import { TestBed } from '@angular/core/testing';

import { ToasternotficationService } from './toasternotfication.service';

describe('ToasternotficationService', () => {
  let service: ToasternotficationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasternotficationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
