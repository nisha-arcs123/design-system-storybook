import { TestBed } from '@angular/core/testing';

import { UiLibTestService } from './ui-lib-test.service';

describe('UiLibTestService', () => {
  let service: UiLibTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiLibTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
