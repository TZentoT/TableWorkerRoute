import { TestBed } from '@angular/core/testing';

import { GetAgeService } from './get-age.service';

describe('GetAgeService', () => {
  let service: GetAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
