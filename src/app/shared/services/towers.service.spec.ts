import { TestBed, inject } from '@angular/core/testing';

import { TowersService } from './towers.service';

describe('TowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TowersService]
    });
  });

  it('should be created', inject([TowersService], (service: TowersService) => {
    expect(service).toBeTruthy();
  }));
});
