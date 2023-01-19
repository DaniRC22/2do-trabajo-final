import { TestBed } from '@angular/core/testing';

import { FechaService } from './fecha.service';

xdescribe('FechaService', () => {
  let service: FechaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
