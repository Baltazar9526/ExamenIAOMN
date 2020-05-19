import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { GrafoBarraComponent } from './components/pages/grafo-barra/grafo-barra.component';
import { GrafoPieComponent } from './components/pages/grafo-pie/grafo-pie.component';
const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },{
    path: 'grafoBarra',
    component: GrafoBarraComponent
  },{
    path: 'grafoPie',
    component: GrafoPieComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }