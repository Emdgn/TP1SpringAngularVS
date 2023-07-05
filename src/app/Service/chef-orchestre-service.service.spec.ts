import { TestBed } from '@angular/core/testing';

import { ChefOrchestreServiceService } from './chef-orchestre-service.service';

describe('ChefOrchestreServiceService', () => {
  let service: ChefOrchestreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefOrchestreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
