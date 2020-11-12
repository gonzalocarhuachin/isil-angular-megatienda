import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MensajeComponent } from './inicio/mensaje/mensaje.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainBannerComponent } from './inicio/main-banner/main-banner.component';
import { ColaboradoresComponent } from './inicio/colaboradores/colaboradores.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeComponent } from './inicio/home/home.component';
import { EnviosComponent } from './inicio/envios/envios.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './tablas/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent,
    MainNavComponent,
    MainBannerComponent,
    ColaboradoresComponent,
    MainHeaderComponent,
    MainFooterComponent,
    TiendaComponent,
    ProveedoresComponent,
    CarritoComponent,
    HomeComponent,
    EnviosComponent,
    EmpleadosComponent,
    ProductosComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
