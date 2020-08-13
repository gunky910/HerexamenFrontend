import { TestBed } from '@angular/core/testing';

import { GebruikersServiceService } from './gebruikers-service.service';

describe('GebruikersServiceService', () => {
  let service: GebruikersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GebruikersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
