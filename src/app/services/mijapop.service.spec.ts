import { TestBed } from '@angular/core/testing';

import { MijapopService } from './mijapop.service';

describe('MijapopService', () => {
  let service: MijapopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MijapopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
