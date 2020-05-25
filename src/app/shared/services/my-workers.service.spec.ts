import { TestBed } from '@angular/core/testing';

import { MyWorkersService } from './my-workers.service';

describe('MyWorkersService', () => {
  let service: MyWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
