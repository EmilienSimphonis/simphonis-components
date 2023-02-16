import { TestBed } from '@angular/core/testing';

import { SimphonisInputSelectionService } from './simphonis-input-selection.service';

describe('SimphonisInputSelectionService', () => {
  let service: SimphonisInputSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimphonisInputSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
