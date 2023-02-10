import { Component } from '@angular/core';
import { InscripcionService } from 'src/app/Service/inscripcion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscripcion } from 'src/app/shared/modules/inscripcion.model';
import { CursosService } from 'src/app/Service/cursos.service';
import { Curso } from 'src/app/shared/modules/cursos.model';

@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.css']
})
export class EditarInscripcionComponent {
ins: Inscripcion = null;


  constructor(private insS:InscripcionService, private activateRouter: ActivatedRoute, private router: Router, private cursoS: CursosService) { 
  }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.insS.update(id, this.ins).subscribe(
      data => {
        this.ins = data;
  }
  )
}

  Editar(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.insS.update(id, this.ins).subscribe(
      data => {
        this.router.navigate(['Dashboard','inscripcion']);
      }
    )
  }

  }

