import { TestBed } from '@angular/core/testing';

import { RandomBookService } from './random-book.service';

describe('RandomBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomBookService = TestBed.get(RandomBookService);
    expect(service).toBeTruthy();
  });
});
