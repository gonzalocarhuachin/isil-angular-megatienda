import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
declare var $:any; //Habilitar el selector $ de Jquery

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listaCategorias: Categoria[];
  
  categoriasAgregarForm = new FormGroup({
    nombre: new FormControl(),
    descripcion: new FormControl()
  });

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

  mostrarFormularioAgregar(){
    $("#formulario-agregar").slideDown("slow");
  }

  cerrarFormularioAgregar(){
    $("#formulario-agregar").slideUp("slow");
  }

}
