import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { GrafoBarraComponent } from './components/pages/grafo-barra/grafo-barra.component';
import { GrafoPieComponent } from './components/pages/grafo-pie/grafo-pie.component';
import { RegistroComponent } from './components/pages/registro/registro.component';
import { IniciarSesionComponent } from './components/pages/iniciar-sesion/iniciar-sesion.component';
import { AuthGuard } from './../app/shared/guards/auth.guard';
const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },{
    path: 'iniciarSesion',
    component: IniciarSesionComponent
  },{
    path: 'registro',
    component: RegistroComponent
  },{
    path: 'grafoBarra',
    canActivate:[AuthGuard],
    component: GrafoBarraComponent
  },{
    path: 'grafoPie',
    canActivate:[AuthGuard],
    component: GrafoPieComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }