import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/entities/colaborador';
import { COLABORADORES } from 'src/app/entities/colaboradores';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  listaColaboradores = COLABORADORES;
  colaboradorEscogido: Colaborador;
  aleatorio = Math.floor(Math.random()*this.listaColaboradores.length);
  colaboradorGanador:Colaborador = this.listaColaboradores[this.aleatorio];
  constructor() { }

  ngOnInit(): void {
  }
  seleccionarColaborador(colaboradorElegido:Colaborador){
    this.colaboradorEscogido = colaboradorElegido;
  }

}
