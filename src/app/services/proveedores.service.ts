import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Proveedor } from '../entities/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: Proveedor[];

  constructor(private http: HttpClient) { }

  proveedoresSelect(): Observable<Proveedor[]>{
    const ruta = "http://localhost/servicioangular/proveedores.php";
    return this.http.post<Proveedor[]>(ruta,null).pipe(
      map((res) => {
        this.proveedores = JSON.parse(JSON.stringify(res));
        return this.proveedores;
      })
    )
  }
}
