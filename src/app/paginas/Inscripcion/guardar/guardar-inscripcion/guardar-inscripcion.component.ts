import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InscripcionService } from 'src/app/Service/inscripcion.service';
import { Inscripcion } from 'src/app/shared/modules/inscripcion.model';
import { CursosService } from '../../../../Service/cursos.service';

@Component({
  selector: 'app-guardar-inscripcion',
  templateUrl: './guardar-inscripcion.component.html',
  styleUrls: ['./guardar-inscripcion.component.css']
})
export class GuardarInscripcionComponent {
  lastname: string = ''
  email: string = ''
  curso: string = ''
  constructor(private insS:InscripcionService, private router: Router, private activatedRouted: ActivatedRoute, private cursoS:CursosService){}
  
  Create(){
    const inscripcion = new Inscripcion(0,this.lastname, this.email,);
    this.insS.guardar(inscripcion).subscribe(
      data => {
        this.router.navigate(['Alumnos']);
      }
    )
  }
}
