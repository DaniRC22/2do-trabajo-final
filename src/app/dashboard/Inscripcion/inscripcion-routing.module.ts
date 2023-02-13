import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Pagina2Component } from "./pages/pagina2.component";
import { GuardarInscripcionComponent } from "./pages/guardar/guardar-inscripcion/guardar-inscripcion.component";
import { EditarInscripcionComponent } from "./pages/editar/editar-inscripcion/editar-inscripcion.component";
import { CursoComponent } from './pages/curso/curso.component';
import { AuthGuard } from "src/app/auth/guards/auth.guard";

const routes: Routes = [
  {path: '',
    component: Pagina2Component
  },
  {
    path: 'agregarinscripcion',
    
    component: GuardarInscripcionComponent
  },
  {
    path: 'editarins/:id',
    canActivate: [AuthGuard],
    component: EditarInscripcionComponent
  },
  {
    path: 'curso/:id',
    component: CursoComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class inscripcionRouter{}