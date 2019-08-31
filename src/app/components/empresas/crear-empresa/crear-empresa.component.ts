import { Component, } from '@angular/core';
import { EmpresaModel } from '../../../models/empresa.model';
import { EmpresasService } from '../../../services/empresas.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent  {
  
  empresa:EmpresaModel=new EmpresaModel();
  constructor(private empresaService:EmpresasService,private router:Router) { 
    
  }

  guardar(f:NgForm){
    this.empresaService.guardarEmpresa(this.empresa).subscribe();
    this.router.navigate(["empresas"]);
  }

}
