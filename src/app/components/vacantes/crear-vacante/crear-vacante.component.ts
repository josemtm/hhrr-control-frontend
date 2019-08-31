import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacantesService } from '../../../services/vacantes.service';
import { VacanteModel } from '../../../models/vacante.model';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-crear-vacante',
  templateUrl: './crear-vacante.component.html',
  styleUrls: ['./crear-vacante.component.css']
})
export class CrearVacanteComponent {
  constructor(private router: Router, private vacantesService: VacantesService,
              private datepipe:DatePipe) { }

            
  vacante=new VacanteModel();

  guardar(f:NgForm){
    //crea la nueva fecha de cierre de la vacante y la formatea al tipo de la bbdd
    let creadoEn=this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.vacante.creado_en=creadoEn;
    //guarda la vacante y retorna a la pagina
    this.vacantesService.guardarVacante(this.vacante).subscribe();
    this.router.navigate(["vacantes"]);
  }

  

}
