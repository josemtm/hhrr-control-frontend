import { Component } from '@angular/core';
import { ProfesionalModel } from '../../../models/profesionales.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesionalesService } from '../../../services/profesionales.service';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.css']
})
export class ProfesionalComponent  {

  profesional:ProfesionalModel=new ProfesionalModel();
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router ,private profesionalesService:ProfesionalesService) {
    //obtiene la id de la url
    let id=this.activatedRoute.snapshot.paramMap.get("id");
    //obtiene profesional por medio de la id
    profesionalesService.getProfesional(id).subscribe((data:ProfesionalModel)=>{
      this.profesional=data;
    })
   }

  guardar(NgForm){
    this.profesionalesService.guardarProfesional(this.profesional).subscribe();
    this.router.navigate(["profesionales"])
  }
  eliminar(id){
    this.profesionalesService.eliminarProfesional(id).subscribe();
    this.router.navigate(["profesional"]);
  }
}
