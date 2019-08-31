import { Component } from '@angular/core';
import { NotificacionesService } from '../../../services/notificaciones.service';
import { NotificacionModel } from '../../../models/notificacion.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-lista-notificaciones',
  templateUrl: './lista-notificaciones.component.html',
  styleUrls: ['./lista-notificaciones.component.css']
})
export class ListaNotificacionesComponent {
  
  notificaciones:NotificacionModel[]=[];

  constructor(private notificacionesService:NotificacionesService,
              private router:Router) { 
   notificacionesService.getNotificaciones().subscribe((data:NotificacionModel[])=>{
     this.notificaciones=data;
     console.log(this.notificaciones)
   });
   
  }

  seleccionar(id){
    this.router.navigate(["notificacion",id]);
  }  
  

}
