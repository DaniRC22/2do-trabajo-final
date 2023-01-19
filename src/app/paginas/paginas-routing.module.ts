import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarStudentsComponent } from './students/editar-students/editar-students.component';
import { CursoDialogComponent } from "./pagina1/curso-dialog/curso-dialog.component";
import { Pagina1Component } from './pagina1/pagina1.component';

const routes: Routes = [
   {path:'cursos',component:Pagina1Component},
  
  ]

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class paginasRouter{}