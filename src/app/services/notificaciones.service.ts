import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { NotificacionModel } from '../models/notificacion.model';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(private http:HttpClient) { }

  url:string="https://duman-control.herokuapp.com/notificaciones/";

  getNotificaciones(){
    return this.http.get(this.url);
  }

  getNotificacion(id){
    return this.http.get(`${this.url}editar/${id}`);
  }

  crearNotificacion(notificacion:NotificacionModel){
    
    return this.http.post
    (`${this.url}guardar`,notificacion);
    
  }

  eliminarNotificacion(id){
    return this.http.delete(`${this.url}eliminar/${id}`);
  }

  
}
