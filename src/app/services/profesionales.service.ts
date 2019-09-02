import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfesionalModel } from '../models/profesionales.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  constructor(private http:HttpClient) { }

  url:string="https://duman-control.herokuapp.com/trabajadores/"
  
  getProfesionales(){
   return  this.http.get(this.url);
  }
  getProfesional(id){
   return this.http.get(`${this.url}editar/${id}`);
  }
  guardarProfesional(profesional:ProfesionalModel){
   return this.http.post(`${this.url}guardar/`,profesional);
  }
  eliminarProfesional(id){
    return this.http.delete(`${this.url}eliminar/${id}`);
  }
  
}
