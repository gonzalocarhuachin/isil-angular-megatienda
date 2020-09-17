import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
