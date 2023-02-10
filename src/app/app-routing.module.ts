import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Dashboard',
  
  loadChildren: () => import('./dashboard/paginas.module').then((module) => module.PaginasModule)
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
},
{
  path: '**',
  redirectTo: 'Dashboard'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
