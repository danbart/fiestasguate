import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { ComunidadComponent } from './comunidad/comunidad.component';
import { FiestasComponent } from './fiestas/fiestas.component';
import { HomeComponent } from './home/home.component';
import { FiestaMesComponent } from  './fiestames/fiestames.component';
import { DepartamentosComponent } from  './departamento/departamento.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'fiestas', component: FiestasComponent},
  {path: 'comunidades', component: ComunidadComponent},
  {path: 'fiestames', component: FiestaMesComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: '**', component: HomeComponent}

];

export const appRotingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
