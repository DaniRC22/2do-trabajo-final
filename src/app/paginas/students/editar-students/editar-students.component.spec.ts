import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarStudentsComponent } from './editar-students.component';

xdescribe('EditarStudentsComponent', () => {
  let component: EditarStudentsComponent;
  let fixture: ComponentFixture<EditarStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
