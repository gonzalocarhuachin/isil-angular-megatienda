import { Component, OnInit } from '@angular/core';
import { COLABORADORES } from 'src/app/entities/colaboradores';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  listaColaboradores = COLABORADORES;
  constructor() { }

  ngOnInit(): void {
  }

}
