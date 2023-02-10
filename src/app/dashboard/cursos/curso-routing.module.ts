import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Pagina1Component } from "./pages/pagina1.component";
import { EditarComponent } from "./pages/curso/editar/editar.component";

const routes: Routes = [
    {path: '',
      component: Pagina1Component
    },
    {
      path: 'editarcurso/:id',
      component: EditarComponent
    },
  ];
  
  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class cursoRouter{}