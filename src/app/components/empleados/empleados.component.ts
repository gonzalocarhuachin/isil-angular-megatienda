import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/entities/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  listaEmpleados: Empleado[];

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.leerEmpleados();
  }

  leerEmpleados():void{
    this.empleadosService.empleadosSelect().subscribe(
      (res: Empleado[]) => {
        this.listaEmpleados = res;
      }
    )
  }

}
