import { TestBed } from '@angular/core/testing';

import { ConstituencyService } from './constituency.service';

describe('ConstituencyService', () => {
  let service: ConstituencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstituencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
