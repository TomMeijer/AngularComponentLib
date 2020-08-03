import { TestBed } from '@angular/core/testing';

import { BsLibService } from './bs-lib.service';

describe('BsLibService', () => {
  let service: BsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
