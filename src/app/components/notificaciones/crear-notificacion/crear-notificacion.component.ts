import { Component} from '@angular/core';
import { NotificacionModel } from '../../..//models/notificacion.model';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { NotificacionesService } from '../../..//services/notificaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-notificacion',
  templateUrl: './crear-notificacion.component.html',
  styleUrls: ['./crear-notificacion.component.css']
})
export class CrearNotificacionComponent {

  constructor(private datepipe:DatePipe,private notificacionesService:NotificacionesService,
              private router:Router) { }


  notificacion= new NotificacionModel();

  guardar(forma:NgForm){
    let creadoEn=this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.notificacion.creado_en=creadoEn;
    this.notificacionesService.crearNotificacion(this.notificacion).subscribe();
    this.router.navigate(["notificaciones"]);
  }

}
