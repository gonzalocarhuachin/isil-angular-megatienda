import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
@Input() CategoriaX: Categoria;
listaProductos: Producto[];
faCartPlus = faCartPlus;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.CategoriaX);
    this.leerProductosxcategoria(this.CategoriaX.idcategoria);
  }

  leerProductosxcategoria(idcategoria):void{
    this.productosService.productosxcategoriaSelect(idcategoria).subscribe(
      (res: Producto[]) => {
        this.listaProductos = res;
      }
    )
  }

}
