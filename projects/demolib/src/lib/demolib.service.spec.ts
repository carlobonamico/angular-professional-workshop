import { TestBed } from '@angular/core/testing';

import { DemolibService } from './demolib.service';

describe('DemolibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemolibService = TestBed.get(DemolibService);
    expect(service).toBeTruthy();
  });
});
