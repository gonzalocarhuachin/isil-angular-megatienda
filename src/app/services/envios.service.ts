import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Envio } from '../entities/envio';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  envios: Envio[];

  constructor(private http: HttpClient) { }

  enviosSelect(): Observable<Envio[]>{
    const ruta = "http://localhost/servicioangular/envios.php";
    return this.http.post<Envio[]>(ruta,null).pipe(
      map((res) => {
        this.envios = JSON.parse(JSON.stringify(res));
        return this.envios;
      })
    )
  }
}
