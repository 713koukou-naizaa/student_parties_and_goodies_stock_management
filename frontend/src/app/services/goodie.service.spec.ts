import { TestBed } from '@angular/core/testing';

import { GoodieService } from './goodie.service';

describe('GoodieService', () => {
  let service: GoodieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
