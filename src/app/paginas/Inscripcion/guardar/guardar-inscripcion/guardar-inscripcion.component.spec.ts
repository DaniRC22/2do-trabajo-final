import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarInscripcionComponent } from './guardar-inscripcion.component';

describe('GuardarInscripcionComponent', () => {
  let component: GuardarInscripcionComponent;
  let fixture: ComponentFixture<GuardarInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarInscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
