import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/entities/envio';
import { EnviosService } from 'src/app/services/envios.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  listaEnvios: Envio[];

  constructor(private enviosService: EnviosService) { }

  ngOnInit(): void {
    this.leerEnvios();
  }

  leerEnvios():void{
    this.enviosService.enviosSelect().subscribe(
      (res: Envio[]) => {
        this.listaEnvios = res;
      }
    )
  }

}
