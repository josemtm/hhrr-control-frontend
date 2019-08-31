import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaModel } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http:HttpClient) {  }

  url="http://localhost:8080/empresas/";
  
  getEmpresas(){
    return this.http.get(this.url);
  }
  getEmpresa(id){
    return this.http.get(`${this.url}editar/${id}`);
  }

  guardarEmpresa(empresa:EmpresaModel){
     return  this.http.post(`${this.url}guardar`,empresa);
  }
  eliminarEmpresa(id){
    return this.http.delete(`${this.url}eliminar/${id}`);
  }
}
