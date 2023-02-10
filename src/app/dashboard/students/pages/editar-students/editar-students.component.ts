import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/Service/estudiante.service';
import { Student } from 'src/app/shared/modules/students.model';

@Component({
  selector: 'app-editar-students',
  templateUrl: './editar-students.component.html',
  styleUrls: ['./editar-students.component.css']
})
export class EditarStudentsComponent {

  estu: Student = null;

  constructor(private estudianteS:EstudianteService, private activateRouter: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.estudianteS.update(id, this.estu).subscribe(
      data => {
        this.estu = data;
  }
  )
}

  Editar(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.estudianteS.update(id, this.estu).subscribe(
      data => {
        this.router.navigate(['Dashboard','alumnos']);
      }
    )
  }

}