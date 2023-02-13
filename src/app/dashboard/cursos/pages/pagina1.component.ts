import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { CursoDialogComponent } from './curso-dialog/curso-dialog.component';

import { Action, Store } from '@ngrx/store';

import { Router } from '@angular/router';
import { createCurso, deleteCurso, loadCursoss, resetCursoState } from '../store/cursos.actions';
import { selectCursosState } from '../store/cursos.selectors';
import { CursosService } from 'src/app/Service/cursos.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LogginForm, User } from 'src/app/shared/modules/user.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnDestroy {
  curso: Curso[] = [];
  loading = false
  islogged =false
  userLoggin: LogginForm
  public user: Observable<User | null>;
  displayedColumns =['id','curso', 'profesor','email','eliminar']
  constructor(private store: Store, private dialog : MatDialog, private router:Router, private cursoS:CursosService, private authS:AuthService){
    this.store.dispatch(loadCursoss())
  }
  ngOnDestroy(): void {
    this.store.dispatch(resetCursoState());
  }

  ngOnInit(): void {
    this.store.select(selectCursosState)
    .subscribe((state) =>{
      this.curso = state.data
      this.loading = state.loading;
      });
      if (this.authS.getToken()) {
        this.islogged = true
      } else {
        this.islogged = false
      }
  }

  createCurso() {
    const dialog = this.dialog.open(CursoDialogComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        console.log(data),
        this.store.dispatch(createCurso({data}))
      }
    })
  }

 delete(id:number) {
this.store.dispatch(deleteCurso({id}));
this.router.navigate(['Dashboard','cursos']);


 }
}



