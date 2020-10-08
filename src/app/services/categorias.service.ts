import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../entities/categoria';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: Categoria[];

  constructor(private http: HttpClient) { }

  categoriasSelect(): Observable<Categoria[]>{
    const ruta = "http://localhost/servicioangular/categorias.php";
    return this.http.post<Categoria[]>(ruta,null).pipe(
      map((res) => {
        this.categorias = JSON.parse(JSON.stringify(res));
        return this.categorias;
      })
    )
  }
}
