import { Component, OnInit} from '@angular/core';
import { EmpresasService } from '../../../services/empresas.service';
import { EmpresaModel } from '../../..//models/empresa.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit  {
  
  empresas:EmpresaModel[]=[];
  constructor(private empresasService: EmpresasService,private router:Router) {
    
   }

   ngOnInit(): void {
    this.empresasService.getEmpresas().subscribe((data:EmpresaModel[])=>{
      this.empresas=data;
    })
  }

   seleccionar(id){
     this.router.navigate(["empresa",id]);
   }  

}
