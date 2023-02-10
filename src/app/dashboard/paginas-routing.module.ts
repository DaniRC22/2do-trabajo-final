import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'alumnos',
        loadChildren: () => import('./students/student.module').then((module) => module.studentModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('./cursos/curso.module').then((module) => module.CursoModule)
      },
      {
        path: 'inscripcion',
        loadChildren: () => import('./Inscripcion/inscripcion.module').then((module) => module.inscripcionModule)
      },
      
    ]
  },
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class paginasRouter{}