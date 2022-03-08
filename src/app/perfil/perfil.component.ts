import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario.modelo';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarioLog: Usuario | undefined;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("logeado")=="true"){
      this.usuarioLog=JSON.parse(sessionStorage.getItem("usuarioLogeado") || '{}');
    }
  }

}
