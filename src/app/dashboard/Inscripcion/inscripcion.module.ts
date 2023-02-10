import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModulesModule } from "src/app/shared/modules/modules.module";
import { inscripcionRouter } from "./inscripcion-routing.module";
import { EditarInscripcionComponent } from "./pages/editar/editar-inscripcion/editar-inscripcion.component";
import { GuardarInscripcionComponent } from "./pages/guardar/guardar-inscripcion/guardar-inscripcion.component";
import { Pagina2Component } from "./pages/pagina2.component";
import { CursoComponent } from './pages/curso/curso.component';

@NgModule({
    declarations: [
      EditarInscripcionComponent,
      GuardarInscripcionComponent,
      Pagina2Component,
      CursoComponent,
    ],
    imports: [
      CommonModule,
      ModulesModule,
      ReactiveFormsModule,
      RouterModule,
      FormsModule,
      inscripcionRouter,
    ],
    exports:[
    ]
  })
  export class inscripcionModule { }