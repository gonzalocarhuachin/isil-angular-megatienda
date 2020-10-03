import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { HomeComponent } from './inicio/home/home.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

const routes: Routes = [
  {path: 'carrito', component: CarritoComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
