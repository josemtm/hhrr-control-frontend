import { Component, OnInit } from '@angular/core';
import { VacantesService } from '../../../services/vacantes.service';
import { VacanteModel } from '../../../models/vacante.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-vacantes',
  templateUrl: './lista-vacantes.component.html',
  styleUrls: ['./lista-vacantes.component.css']
})
export class ListaVacantesComponent  {

  vacantes:VacanteModel[]=[];
  constructor(private vacantesService:VacantesService,private router: Router) {}

   ngOnInit(): void {
    this.vacantesService.getVacantes().subscribe((data:VacanteModel[])=>{
      this.vacantes=data;
      
      
    })
 }
   

   cerrarVacante(vacanteId){
     this.router.navigate(["cerrar-vacante",vacanteId]);
   }

   seleccionar(id){
    this.router.navigate(["vacante",id]);
  }  
  

}
