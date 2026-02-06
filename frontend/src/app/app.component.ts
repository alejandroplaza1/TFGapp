import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importar RouterOutlet
// Importar tu componente hijo directamente
import { CrearUsuarioComponent } from './ApiGestionFront/components/crear-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,           // <--- Necesario para <router-outlet>
    CrearUsuarioComponent   // <--- Necesario para <app-crear-usuario>
  ],
  templateUrl: './app.component.html',
  // Asegúrate de que este nombre coincide con el archivo que tienes en la carpeta (app.component.css o app.css)
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Sistema de Gestión de Laboratorio';
}