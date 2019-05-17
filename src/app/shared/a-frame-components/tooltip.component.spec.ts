import { TestBed } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.service';

describe('TooltipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TooltipComponent = TestBed.get(TooltipComponent);
    expect(service).toBeTruthy();
  });
});
