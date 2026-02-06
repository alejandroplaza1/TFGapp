import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionUsuariosService } from '../services/usuario.service';
import { CrearUsuarioComponent } from './components/crear-usuario.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GestionUsuariosService
  ],
  exports: [
    CrearUsuarioComponent 
  ]
})
export class GestionUsuariosModule { }