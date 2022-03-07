import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario.modelo';
import { UsuariosService } from '../servicios/usuarios.service';
import { LocalstorageService } from '../servicios/localstorage.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios: Array<Usuario>=[];

  constructor(private usuariosService: UsuariosService,private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
    this.usuarios = this.localStorageService.get("usuarios");

  }

}
