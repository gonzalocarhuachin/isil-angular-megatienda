import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Empleado } from '../entities/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Empleado[];

  constructor(private http: HttpClient) { }

  empleadosSelect(): Observable<Empleado[]>{
    const ruta = "http://localhost/servicioangular/empleados.php";
    return this.http.post<Empleado[]>(ruta,null).pipe(
      map((res) => {
        this.empleados = JSON.parse(JSON.stringify(res));
        return this.empleados;
      })
    )
  }
}
