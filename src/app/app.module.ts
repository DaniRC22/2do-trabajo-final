import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './shared/pages/pages.component';
import { StudentsComponent } from './paginas/students/students.component';
import { ModulesModule } from './shared/modules/modules.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MidirectiveDirective } from './shared/midirective.directive';
import { SharedModuleModule } from './shared/shared-module.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layouts/layout.module';
import { Layout1Module } from './layout/layout1.module';
import { PaginasModule } from './paginas/paginas.module';


@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModulesModule,
    AppRoutingModule,
    LayoutModule,
    Layout1Module,
    SharedModuleModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
