import { TestBed } from '@angular/core/testing';

import { InscripcionService } from './inscripcion.service';

xdescribe('InscripcionService', () => {
  let service: InscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
