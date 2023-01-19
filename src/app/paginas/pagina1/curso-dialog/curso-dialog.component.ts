import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { CursosService } from '../../../Service/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.css']
})
export class CursoDialogComponent {
  teacher: string = ''
  email: string = ''
  curso: string= ''
  constructor(private cursoS:CursosService, private router: Router, private activatedRouted: ActivatedRoute){}
  
  Create(){
    const curso = new Curso(0,this.teacher, this.email, this.curso);
    this.cursoS.guardar(curso).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }}
