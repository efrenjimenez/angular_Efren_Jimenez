import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { LocalstorageService } from '../servicios/localstorage.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private usuariosService: UsuariosService,private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
    //Al cargar el compononente inicio, guardo en localStorage los usuarios por defectos que creados en el servicio usuarios.
    for(var usuario of this.usuariosService.getUsuarios()){
      this.localStorageService.set(usuario.nick, usuario)
    }
    //Y también los meto todos en un mismo item para poder recuperarlos para listarlos
    this.localStorageService.set("usuarios", this.usuariosService.getUsuarios())

  }

}
