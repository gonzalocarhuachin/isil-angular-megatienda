import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/entities/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  reverse: boolean = false;

  listaProveedores: Proveedor[];
  ProveedoresFilter: any = { nombreempresa: '' };
  order: string = 'nombreempresa';

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.leerProveedores();
  }

  leerProveedores():void{
    this.proveedoresService.proveedoresSelect().subscribe(
      (res: Proveedor[]) => {
        this.listaProveedores = res;
      }
    )
  }

  setOrder(value:string){
    if(this.order === value){
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}
