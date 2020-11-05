import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemCarrito } from 'src/app/entities/itemCarrito';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: Producto[];
  items: ItemCarrito[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const idproducto = params.idproducto
        console.log(idproducto)
        if (idproducto) {
          this.agregarItem(idproducto)
        }
        else
        {
          this.mostrarCarrito()
        }
      }
    )
  }

  agregarItem(idproducto):void{
    this.productosService.productosSoloSelect(idproducto).subscribe(
      (res:Producto[]) => {
        console.log(res)
        this.productos = res;
        var itemCarrito: ItemCarrito = {
          producto: this.productos[0],
          cantidad: 1
        }
        console.log(itemCarrito);
        let carrito: any
        carrito = [];
        carrito.push(JSON.stringify(ItemCarrito))
        localStorage.setItem("carrito",JSON.stringify(carrito))
        this.mostrarCarrito()
      }
    )
  }

  mostrarCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito != null) {
      for (let i = 0; i < carrito.length; i++) {
        let item = JSON.parse(carrito[i]);
        this.items.push({
          producto: item.producto,
          cantidad: item.cantidad
        })
      }
    }
  }

  vaciarCarrito():void{
    
  }

}
