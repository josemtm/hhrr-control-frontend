import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ProfesionalesService } from '../../../services/profesionales.service';
import { ProfesionalModel } from '../../../models/profesionales.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-profesional',
  templateUrl: './crear-profesional.component.html',
  styleUrls: ['./crear-profesional.component.css']
})
export class CrearProfesionalComponent {

  
  constructor(private profesionalesService:ProfesionalesService,
    private router:Router) { }


profesional= new ProfesionalModel();

guardar(forma:NgForm){
this.profesionalesService.guardarProfesional(this.profesional).subscribe();
this.router.navigate(["profesionales"]);
}

}
