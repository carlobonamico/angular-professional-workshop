import { TestBed } from '@angular/core/testing';

import { TestlibService } from './testlib.service';

describe('TestlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestlibService = TestBed.get(TestlibService);
    expect(service).toBeTruthy();
  });
});
