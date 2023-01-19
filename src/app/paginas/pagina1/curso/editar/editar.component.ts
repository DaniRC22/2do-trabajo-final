import { Component } from '@angular/core';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { CursosService } from '../../../../Service/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  curso: Curso = null;

  constructor(private cursoS:CursosService, private activateRouter: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.cursoS.update(id, this.curso).subscribe(
      data => {
        this.curso = data;
  }
  )
}

  Editar(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.cursoS.update(id, this.curso).subscribe(
      data => {
        this.router.navigate(['curso']);
      }
    )
  }

}
