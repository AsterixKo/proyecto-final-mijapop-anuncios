import { TestBed } from '@angular/core/testing';

import { HeaderNavBarService } from './header-nav-bar.service';

describe('HeaderNavBarService', () => {
  let service: HeaderNavBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderNavBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
