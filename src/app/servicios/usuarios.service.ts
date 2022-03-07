import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.modelo';
import { DataService } from './data.service';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  constructor(private dataService:DataService) { }

  public usuarios: Array<Usuario> = [
    {id:1, nombre: 'Admin', apellidos: 'Admin', email:'admin@admin.com', fechaNac:'11-02-1990', nick:'admin', password: 'admin'}
  ];

  public usuarioLogeado: Usuario | undefined;

  getUsuarios(){
    return this.usuarios;
  }

  setUsuarioLogeado(usuario: Usuario){
    this.usuarioLogeado=usuario;
  }

  getUsuarioLogeado(){
    return this.usuarioLogeado;

  }

  saveUsuarios(){
    this.dataService.guardarUsuarios(this.usuarios);
  }

  insertUsuario(usuario: Usuario){
    this.usuarios.push(usuario)
    this.dataService.guardarUsuario(usuario)
  }

  setUsuario(key: string, usuario: Usuario): void {
    try {
      localStorage.setItem(key, JSON.stringify(usuario));
    } catch (e) {
      console.error('Error al guardar', e);
    }
  }

  getUsuario(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      console.error('Error recpuerar', e);
      return null;
    }
  }

}
