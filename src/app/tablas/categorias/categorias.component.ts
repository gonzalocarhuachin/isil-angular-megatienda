import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
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

  nuevaCategoria: any = {};
  faEdit = faEdit;
  faTimes = faTimes;

  categoriasActualizarForm = new FormGroup({
    idcategoria: new FormControl(),
    nombre: new FormControl(),
    descripcion: new FormControl()
  });

  categoriaActualizar: Categoria;

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

  agregarCategoria(values){
    console.log(values);
    this.categoriasService.categoriasInsert(values.nombre,values.descripcion).subscribe(
      (res) => {
        console.log(res);
        this.nuevaCategoria = {
          idcategoria: res,
          nombre: values.nombre,
          descripcion: values.descripcion
        }
        this.listaCategorias.push(this.nuevaCategoria);
        this.categoriasAgregarForm.reset();
        $("#formulario-agregar").slideUp("slow");
      }
    )
  }

  seleccionar(itemCategoria: Categoria){
    console.log(itemCategoria);
    this.categoriaActualizar = itemCategoria;
    $('#formulario-actualizar').modal('show');
  }

  eliminar(itemCategoria: Categoria){
    var respuesta = confirm("Esta seguro que desea eliminar la categoria " + itemCategoria.nombre + "?");
    if (respuesta == true) {
      this.categoriasService.categoriasDelete(itemCategoria.idcategoria).subscribe();
      this.listaCategorias = this.listaCategorias.filter(
        item => item.idcategoria !== itemCategoria.idcategoria
      );
      alert("Se ha eliminado la categoria " + itemCategoria.nombre);
    }
  }

  actualizarCategoria(values){
    console.log(values);
    this.categoriasService.categoriasUpdate(
      values.idcategoria,values.nombre,values.descripcion).subscribe();
      alert("Se ha actualizadp la categoria de codigo: "+ values.idcategoria);
      $('#formulario-actualizar').modal('hide');
  }

}
