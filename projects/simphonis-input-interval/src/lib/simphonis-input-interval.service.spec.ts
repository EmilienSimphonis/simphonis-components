import { TestBed } from '@angular/core/testing';

import { SimphonisInputIntervalService } from './simphonis-input-interval.service';

describe('SimphonisInputIntervalService', () => {
  let service: SimphonisInputIntervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimphonisInputIntervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
