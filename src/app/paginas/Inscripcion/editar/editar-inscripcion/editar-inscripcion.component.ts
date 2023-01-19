import { Component } from '@angular/core';
import { Inscripcion } from '../../../../shared/modules/inscripcion.model';
import { InscripcionService } from 'src/app/Service/inscripcion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.css']
})
export class EditarInscripcionComponent {
ins: Inscripcion = null;

  constructor(private insS:InscripcionService, private activateRouter: ActivatedRoute, private router: Router) { 
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
        this.router.navigate(['']);
      }
    )
  }

}
