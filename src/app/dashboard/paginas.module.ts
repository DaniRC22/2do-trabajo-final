import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ModulesModule } from '../shared/modules/modules.module';
import { EditarInscripcionComponent } from './Inscripcion/pages/editar/editar-inscripcion/editar-inscripcion.component';
import { GuardarInscripcionComponent } from './Inscripcion/pages/guardar/guardar-inscripcion/guardar-inscripcion.component';
import { Pagina2Component } from './Inscripcion/pages/pagina2.component';
import { HeaderComponent } from './layout/header/header.component';
import { PagesComponent } from './layout/pages/pages.component';
import { paginasRouter } from './paginas-routing.module';
import { StudentDialogComponent } from './students/pages/student-dialog/student-dialog.component';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ModulesModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    paginasRouter,
  ],
  exports:[
  ]
})
export class PaginasModule { }
