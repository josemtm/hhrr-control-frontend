import { Routes } from '@angular/router';
import {ListaNotificacionesComponent } from './components/notificaciones/lista-notificaciones/lista-notificaciones.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {path: '',    redirectTo: 'notificaciones',    pathMatch: 'full',  },
  {    path: '',    component: AdminLayoutComponent,    children: [{path: '',      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {    path: '**',    redirectTo: 'notificaciones'  },
  { path: 'notificaciones', component: ListaNotificacionesComponent }
]
