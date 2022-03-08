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
    
    //Si no existe la lista de usuario en LocalStorage, meto la lista inicial que sólo contiene al admin.
    if(this.localStorageService.get("usuarios")==null){
      this.localStorageService.set("usuarios", this.usuariosService.getUsuarios())
    }

  }

}
