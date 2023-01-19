import { Component, Input } from '@angular/core';
import { CursosService } from '../../../Service/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/shared/modules/students.model';
import { EstudianteService } from 'src/app/Service/estudiante.service';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent {
  public student: Student | null = null
  private destroyed$ = new Subject()
  constructor(private readonly studentsService: EstudianteService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
  ngOnInit(): void {
    this.studentsService.detalle(parseInt(this.activatedRoute.snapshot.params['studentId'] || 0))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => this.student = result)
  }
}

