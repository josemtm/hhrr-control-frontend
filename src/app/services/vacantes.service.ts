import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VacanteModel } from '../models/vacante.model';


@Injectable({
  providedIn: 'root'
})
export class VacantesService {

  constructor(private http:HttpClient) { }

  url:string="https://duman-control.herokuapp.com/trabajos/";

  getVacantes(){
    return this.http.get(`${this.url}abiertos`);
  }
  getVacantesCerradas(){
    return this.http.get(`${this.url}cerrados`);
  }
  getVacante(id){
    return this.http.get(`${this.url}editar/${id}`);
  }

  guardarVacante(vacante:VacanteModel){
    return this.http.post(`${this.url}guardar`, vacante);
  }
  eliminarVacante(id){
    return this.http.delete(`${this.url}eliminar/${id}`);
  }
}
