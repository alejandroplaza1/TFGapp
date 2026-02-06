import { Component } from '@angular/core';
import { Usuario } from '../class/usuario';
import { GestionUsuariosService } from '../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'] // o .scss
})
export class CrearUsuarioComponent {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: GestionUsuariosService) {}

  guardar() {
    this.usuarioService.crearUsuario(this.usuario).subscribe({
      next: (res) => {
        console.log('Guardado:', res);
        alert('Usuario y datos de laboratorio guardados.');
        this.usuario = new Usuario(); // Limpiar formulario
      },
      error: (err) => console.error(err)
    });
  }
}