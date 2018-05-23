import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { routing, appRotingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { FiestasComponent } from './fiestas/fiestas.component';
import { HomeComponent } from './home/home.component';
import { FiestaMesComponent } from './fiestames/fiestames.component';
import { DepartamentosComponent } from './departamento/departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ComunidadComponent,
    FiestasComponent,
    HomeComponent,
    FiestaMesComponent,
    DepartamentosComponent,
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    routing,
    HttpClientModule, //cargamos el modulo para usar servicios https
    HttpModule,
  ],
  providers: [appRotingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
