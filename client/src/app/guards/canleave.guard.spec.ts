import { TestBed, async, inject } from '@angular/core/testing';

import { CanleaveGuard } from './canleave.guard';

describe('CanleaveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanleaveGuard]
    });
  });

  it('should ...', inject([CanleaveGuard], (guard: CanleaveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
