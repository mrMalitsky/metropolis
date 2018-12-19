import { TestBed, inject } from '@angular/core/testing';

import { ControllersService } from './controllers.service';

describe('ControllersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControllersService]
    });
  });

  it('should be created', inject([ControllersService], (service: ControllersService) => {
    expect(service).toBeTruthy();
  }));
});
