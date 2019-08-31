import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { CrearEmpresaComponent }       from '../../components/empresas/crear-empresa/crear-empresa.component';
import { ListaNotificacionesComponent } from '../../components/notificaciones/lista-notificaciones/lista-notificaciones.component';
import { CrearNotificacionComponent } from '../../components/notificaciones/crear-notificacion/crear-notificacion.component';
import { ListaVacantesComponent } from '../../components/vacantes/lista-vacantes/lista-vacantes.component';
import { CrearVacanteComponent } from '../../components/vacantes/crear-vacante/crear-vacante.component';
import { VacantesOcupadasComponent } from '../../components/vacantes/vacantes-ocupadas/vacantes-ocupadas.component';
import { ListaEmpresasComponent } from '../../components/empresas/lista-empresas/lista-empresas.component';
import { ListaProfesionalesComponent } from '../../components/profesionales/lista-profesionales/lista-profesionales.component';
import { CrearProfesionalComponent } from '../../components/profesionales/crear-profesional/crear-profesional.component';
import { ContactarProfesionalComponent } from '../../components/profesionales/contactar-profesional/contactar-profesional.component';
import { CerrarVacanteComponent } from '../../components/vacantes/cerrar-vacante/cerrar-vacante.component';
import { NotificacionComponent } from '../../components/notificaciones/notificacion/notificacion.component';
import { VacanteComponent } from '../../components/vacantes/vacante/vacante.component';
import { EmpresaComponent } from '../../components/empresas/empresa/empresa.component';
import { ProfesionalComponent } from '../../components/profesionales/profesional/profesional.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    CrearEmpresaComponent,
    ListaNotificacionesComponent,
    CrearNotificacionComponent,
    ListaVacantesComponent,
    CrearVacanteComponent,
    VacantesOcupadasComponent,
    ListaEmpresasComponent,
    CrearEmpresaComponent,
    ListaProfesionalesComponent,
    CrearProfesionalComponent,
    ContactarProfesionalComponent,
    CerrarVacanteComponent,
    NotificacionComponent,
    VacanteComponent,
    EmpresaComponent,
    ProfesionalComponent,
   
  ]
})

export class AdminLayoutModule {}
