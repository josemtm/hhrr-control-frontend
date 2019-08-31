import { Component, OnInit } from '@angular/core';
import { NotificacionModel } from '../../../models/notificacion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionesService } from '../../../services/notificaciones.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent  {

  notificacion:NotificacionModel=new NotificacionModel();
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router ,private notificacionesService:NotificacionesService) {
    //obtiene la id de la url
    let id=this.activatedRoute.snapshot.paramMap.get("id");
    //obtiene la empresa por medio de la id
    notificacionesService.getNotificacion(id).subscribe((data:NotificacionModel)=>{
      this.notificacion=data;
    })
   }

  guardar(NgForm){
    this.notificacionesService.crearNotificacion(this.notificacion).subscribe();
    this.router.navigate(["notificaciones"])
  }

  eliminar(id){
    this.notificacionesService.eliminarNotificacion(id).subscribe();
    this.router.navigate(["notificaciones"]);
  }
}
