import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../ApiGestionFront/class/usuario';
;

@Injectable({
  providedIn: 'root'
})
export class GestionUsuariosService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}