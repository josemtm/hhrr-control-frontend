import { Component} from '@angular/core';
import { VacantesService } from '../../../services/vacantes.service';
import { VacanteModel } from '../../../models/vacante.model';

@Component({
  selector: 'app-vacantes-ocupadas',
  templateUrl: './vacantes-ocupadas.component.html',
  styleUrls: ['./vacantes-ocupadas.component.css']
})
export class VacantesOcupadasComponent  {
  
  vacantes:VacanteModel[];
  constructor(private vacantesService:VacantesService) { 
    vacantesService.getVacantesCerradas().subscribe((data:VacanteModel[])=>{
      this.vacantes=data;
    })
    }


  

}
