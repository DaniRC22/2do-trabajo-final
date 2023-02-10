import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { ModulesModule } from './shared/modules/modules.module';
import { SharedModuleModule } from './shared/shared-module.module';
import { studentModule } from './dashboard/students/student.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    ModulesModule,
    AppRoutingModule,
    RouterModule,
    SharedModuleModule,
    HttpClientModule,
    AppStoreModule,
    studentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
