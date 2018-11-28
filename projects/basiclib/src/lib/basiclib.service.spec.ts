import { TestBed } from '@angular/core/testing';

import { BasiclibService } from './basiclib.service';

describe('BasiclibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasiclibService = TestBed.get(BasiclibService);
    expect(service).toBeTruthy();
  });
});
