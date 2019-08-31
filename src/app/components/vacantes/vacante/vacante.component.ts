import { Component } from '@angular/core';
import { VacanteModel } from '../../../models/vacante.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VacantesService } from '../../../services/vacantes.service';

@Component({
  selector: 'app-vacante',
  templateUrl: './vacante.component.html',
  styleUrls: ['./vacante.component.css']
})
export class VacanteComponent  {

  vacante:VacanteModel=new VacanteModel();
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router ,private vacantesService:VacantesService) {
    //obtiene la id de la url
    let id=this.activatedRoute.snapshot.paramMap.get("id");
    //obtiene profesional por medio de la id
    vacantesService.getVacante(id).subscribe((data:VacanteModel)=>{
      this.vacante=data;
    })
   }

  guardar(NgForm){
    this.vacantesService.guardarVacante(this.vacante).subscribe();
    this.router.navigate(["vacantes"]);
  }

  eliminar(id){
    this.vacantesService.eliminarVacante(id).subscribe();
    this.router.navigate(["vacantes"]);
  }
}
