import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModulesModule } from "src/app/shared/modules/modules.module";
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './store/cursos.effects';
import { StoreModule } from "@ngrx/store";
import { cursosFeatureKey, reducer } from "./store/cursos.reducer";
import { HttpClientModule } from '@angular/common/http';
import { CursoDialogComponent } from "./pages/curso-dialog/curso-dialog.component";
import { EditarComponent } from "./pages/curso/editar/editar.component";
import { Pagina1Component } from "./pages/pagina1.component";
import { cursoRouter } from "./curso-routing.module";

@NgModule({
    declarations: [
        Pagina1Component,
        EditarComponent,
        CursoDialogComponent,
        EditarComponent
    ],
    imports: [
        CommonModule,
        ModulesModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        StoreModule.forFeature(cursosFeatureKey, reducer),
        EffectsModule.forFeature([CursosEffects]),
        HttpClientModule,
        cursoRouter,
     ],
    exports: [
    ]
  })
  export class CursoModule { }
  