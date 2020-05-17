import { TestBed } from '@angular/core/testing';

import { VipService } from './vip.service';

describe('VipService', () => {
  let service: VipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
