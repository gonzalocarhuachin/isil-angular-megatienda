import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  listaCategorias: Categoria[];
  categoriaEscogida:Categoria;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.leerCategorias();
  }

  leerCategorias():void{
    this.categoriasService.categoriasSelect().subscribe(
      (res: Categoria[]) => {
        this.listaCategorias = res;
      }
    )
  }

  seleccionarCategoria(categoriaElegida:Categoria){
    this.categoriaEscogida = categoriaElegida;
  }

}
