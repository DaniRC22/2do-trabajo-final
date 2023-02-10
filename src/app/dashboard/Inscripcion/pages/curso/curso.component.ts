import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { CursosService } from 'src/app/Service/cursos.service';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { Inscripcion } from '../../../../shared/modules/inscripcion.model';
import { InscripcionService } from 'src/app/Service/inscripcion.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  ins: Inscripcion = null
constructor(private insS: InscripcionService, private router: Router, private activateRouter: ActivatedRoute){}

ngOnInit(): void {
  const id = this.activateRouter.snapshot.params['id'];
  this.insS.update(id, this.ins).subscribe(
    data => {
      this.ins = data;
}
)
}

  Curso(): void {
      const id = this.activateRouter.snapshot.params['id'];
      this.insS.update(id, this.ins).subscribe(
        data => {
          this.router.navigate(['Dashboard','inscripcion']);
        }
      )
    }
}
