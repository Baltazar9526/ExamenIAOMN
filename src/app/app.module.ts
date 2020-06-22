import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { GrafoPieComponent } from './components/pages/grafo-pie/grafo-pie.component';
import { GrafoBarraComponent } from './components/pages/grafo-barra/grafo-barra.component';
import { RegistroComponent } from './components/pages/registro/registro.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { IniciarSesionComponent } from './components/pages/iniciar-sesion/iniciar-sesion.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    GrafoPieComponent,
    GrafoBarraComponent,
    RegistroComponent,
    RegistroComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }