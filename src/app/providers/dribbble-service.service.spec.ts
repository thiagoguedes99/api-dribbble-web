import { TestBed, inject } from '@angular/core/testing';

import { DribbbleServiceService } from './dribbble-service.service';

describe('DribbbleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DribbbleServiceService]
    });
  });

  it('should ...', inject([DribbbleServiceService], (service: DribbbleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
