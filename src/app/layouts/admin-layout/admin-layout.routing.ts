import { Routes } from '@angular/router';

import { ListaNotificacionesComponent } from '../../components/notificaciones/lista-notificaciones/lista-notificaciones.component';
import { CrearNotificacionComponent } from '../../components/notificaciones/crear-notificacion/crear-notificacion.component';
import { ListaVacantesComponent } from '../../components/vacantes/lista-vacantes/lista-vacantes.component';
import { CrearVacanteComponent } from '../../components/vacantes/crear-vacante/crear-vacante.component';
import { VacantesOcupadasComponent } from '../../components/vacantes/vacantes-ocupadas/vacantes-ocupadas.component';
import { ListaEmpresasComponent } from '../../components/empresas/lista-empresas/lista-empresas.component';
import { CrearEmpresaComponent } from '../../components/empresas/crear-empresa/crear-empresa.component';
import { ListaProfesionalesComponent } from '../../components/profesionales/lista-profesionales/lista-profesionales.component';
import { CrearProfesionalComponent } from '../../components/profesionales/crear-profesional/crear-profesional.component';
import { ContactarProfesionalComponent } from '../../components/profesionales/contactar-profesional/contactar-profesional.component';
import { CerrarVacanteComponent } from '../../components/vacantes/cerrar-vacante/cerrar-vacante.component';
import { NotificacionComponent } from '../../components/notificaciones/notificacion/notificacion.component';
import { VacanteComponent } from '../../components/vacantes/vacante/vacante.component';
import { EmpresaComponent } from '../../components/empresas/empresa/empresa.component';
import { ProfesionalComponent } from '../../components/profesionales/profesional/profesional.component';



export const AdminLayoutRoutes: Routes = [

    //notificaciones
  { path: 'notificaciones', component: ListaNotificacionesComponent },
  { path: 'crear-notificacion', component: CrearNotificacionComponent },
  { path: 'notificacion/:id', component: NotificacionComponent },
  //empresas
  { path: 'empresas', component: ListaEmpresasComponent },
  { path: 'crear-empresa', component: CrearEmpresaComponent },
  { path: 'empresa/:id', component: EmpresaComponent },
  //profesionales
  { path: 'contactar-profesional', component: ContactarProfesionalComponent },
  { path: 'crear-profesional', component: CrearProfesionalComponent },
  { path: 'profesionales', component: ListaProfesionalesComponent },
  { path: 'profesional/:id', component: ProfesionalComponent },
  //vacantes
  { path: 'crear-vacante', component: CrearVacanteComponent },
  { path: 'vacantes', component: ListaVacantesComponent },
  { path: 'cerrar-vacante/:id', component: CerrarVacanteComponent },
  { path: 'vacantes-ocupadas', component: VacantesOcupadasComponent },
  { path: 'vacante/:id', component: VacanteComponent },

  
];
