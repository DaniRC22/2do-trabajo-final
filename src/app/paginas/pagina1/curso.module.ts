import { NgModule } from "@angular/core";
import { Pagina1Component } from "./pagina1.component";
import { EditarComponent } from "./curso/editar/editar.component";
import { CursoDialogComponent } from "./curso-dialog/curso-dialog.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModulesModule } from "src/app/shared/modules/modules.module";
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './store/cursos.effects';
import { StoreModule } from "@ngrx/store";
import { cursosFeatureKey, reducer } from "./store/cursos.reducer";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        Pagina1Component,
        EditarComponent,
        CursoDialogComponent
    ],
    imports: [
        CommonModule,
        ModulesModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        StoreModule.forFeature(cursosFeatureKey, reducer),
        EffectsModule.forFeature([CursosEffects]),
        HttpClientModule
     ],
    exports: [
    ]
  })
  export class CursoModule { }
  