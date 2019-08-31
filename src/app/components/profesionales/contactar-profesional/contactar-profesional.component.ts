import { Component } from '@angular/core';
import { ProfesionalesService } from '../../../services/profesionales.service';
import { ProfesionalModel } from '../../../models/profesionales.model';
@Component({
  selector: 'app-contactar-profesional',
  templateUrl: './contactar-profesional.component.html',
  styleUrls: ['./contactar-profesional.component.css']
})
export class ContactarProfesionalComponent  {

  profesionales:ProfesionalModel[]=[]
  constructor(private profesionalesService:ProfesionalesService) {
      profesionalesService.getProfesionales().subscribe((data:ProfesionalModel[])=>{
        this.profesionales=data;
      })
   }

  

}
