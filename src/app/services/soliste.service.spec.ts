import { TestBed } from '@angular/core/testing';

import { SolisteService } from './soliste.service';

describe('SolisteService', () => {
  let service: SolisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
