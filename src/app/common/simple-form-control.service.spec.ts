import { TestBed } from '@angular/core/testing';

import { SimpleFormControlService } from './simple-form-control.service';

describe('SimpleFormControlService', () => {
  let service: SimpleFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
