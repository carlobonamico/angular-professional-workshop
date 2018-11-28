import { TestBed } from '@angular/core/testing';

import { BookClientService } from './book-client.service';

describe('BookClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookClientService = TestBed.get(BookClientService);
    expect(service).toBeTruthy();
  });
});
