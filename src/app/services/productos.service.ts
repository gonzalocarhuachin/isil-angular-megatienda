import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../entities/producto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[];

  constructor(private http: HttpClient) { }

  productosxcategoriaSelect(idcategoria): Observable<Producto[]>{
    const ruta = "http://localhost/servicioangular/productosxcategoria.php";

    const formData: FormData = new FormData();
    formData.append("caty",idcategoria);

    return this.http.post<Producto[]>(ruta,formData).pipe(
      map((res) => {
        this.productos = JSON.parse(JSON.stringify(res));
        return this.productos;
      })
    )
  }

  productosSoloSelect(idproducto): Observable<Producto[]>{
    const ruta = "http://localhost/servicioangular/producto_solo.php";

    const formData: FormData = new FormData();
    formData.append("idproducto",idproducto);

    return this.http.post<Producto[]>(ruta,formData).pipe(
      map((res) => {
        this.productos = JSON.parse(JSON.stringify(res));
        return this.productos;
      })
    )
  }
}
