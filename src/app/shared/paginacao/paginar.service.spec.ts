import { TestBed, inject } from '@angular/core/testing';

import { PaginarService } from './paginar.service';

describe('PaginarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginarService]
    });
  });

  it('should ...', inject([PaginarService], (service: PaginarService) => {
    expect(service).toBeTruthy();
  }));
});
