import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../../..//services/empresas.service';
import { EmpresaModel } from '../../..//models/empresa.model';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent  {
  
  empresa:EmpresaModel = new EmpresaModel();
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router ,private empresasService:EmpresasService) {
    //obtiene la id de la url
    let id=this.activatedRoute.snapshot.paramMap.get("id");
    //obtiene la empresa por medio de la id
    empresasService.getEmpresa(id).subscribe((data:EmpresaModel)=>{
      this.empresa=data;
    })
   }

  guardar(NgForm){
    this.empresasService.guardarEmpresa(this.empresa).subscribe();
    this.router.navigate(["empresas"]);
  }

  eliminar(id){
    this.empresasService.eliminarEmpresa(id).subscribe();
    this.router.navigate(["empresas"]);
  }

}
