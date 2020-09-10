import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainBannerComponent } from './main-banner/main-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent,
    MainNavComponent,
    MainBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
