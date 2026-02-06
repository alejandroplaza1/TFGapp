import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

// 👇 1. ESTA LÍNEA ES LA QUE TE FALTA O ESTÁ MAL
import { AppComponent } from './app.component.js'; 
import { GestionUsuariosModule } from './ApiGestionFront/gestion.usuarios.module';

@NgModule({
  declarations: [
    AppComponent // 👇 2. Debe estar aquí también
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GestionUsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 👈 Ahora esto dejará de estar en rojo
})
export class AppModule { }