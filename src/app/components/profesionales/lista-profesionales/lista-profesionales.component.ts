import { Component, OnInit} from '@angular/core';
import { ProfesionalesService } from '../../../services/profesionales.service';
import { ProfesionalModel } from '../../../models/profesionales.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-profesionales',
  templateUrl: './lista-profesionales.component.html',
  styleUrls: ['./lista-profesionales.component.css']
})
export class ListaProfesionalesComponent implements OnInit {

  profesionales:ProfesionalModel[]=[];

  constructor(private profesionalesServices:ProfesionalesService,
              private router:Router) {}

  ngOnInit(): void {
     this.profesionalesServices.getProfesionales().subscribe((data:ProfesionalModel[])=>{
      this.profesionales=data;
    })
  }

  seleccionar(id){
    this.router.navigate(["profesional",id]);
  }  

}
