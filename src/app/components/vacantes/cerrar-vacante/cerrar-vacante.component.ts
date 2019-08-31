import { Component } from '@angular/core';
import { VacantesService } from '../../../services/vacantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VacanteModel } from '../../../models/vacante.model';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cerrar-vacante',
  templateUrl: './cerrar-vacante.component.html',
  styleUrls: ['./cerrar-vacante.component.css']
})
export class CerrarVacanteComponent{

  vacante:VacanteModel;

  constructor(private vacantesService: VacantesService, private activatedRoute:ActivatedRoute,
    private datepipe:DatePipe,private router:Router) {
   let id=this.activatedRoute.snapshot.paramMap.get("id");
   vacantesService.getVacante(id).subscribe((data:VacanteModel)=>{
     this.vacante=data;
     
   });
  }
  
  guardar(f:NgForm){
    //crea la nueva fecha de cierre de la vacante y la formatea al tipo de la bbdd
    let creadoEn=this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.vacante.creado_en=creadoEn;
    this.vacante.estado="cerrada"
    //guarda los cambios y devuelve a la pagina principal
    this.vacantesService.guardarVacante(this.vacante).subscribe();
    this.router.navigate(["vacantes"]);
  }
  
}
