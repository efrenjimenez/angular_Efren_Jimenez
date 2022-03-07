import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario.modelo';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  opcion1: String = 'Inicio';
  opcion2: String = 'Login';
  opcion3: String = 'Registro';
  opcion4: String = 'Acerca de'
  //usuarioLog: any={id:'', nombre: '', apellidos: '', email:'', fechaNac:'', nick:'', password: ''};
  usuarioLog: Usuario | undefined;

  salir(){
    sessionStorage.setItem("logeado","false")
    sessionStorage.removeItem("usuarioLogeado");
  }

  constructor() {

  }

  ngOnInit(): void {
    if(sessionStorage.getItem("logeado")=="true"){
      this.usuarioLog=JSON.parse(sessionStorage.getItem("usuarioLogeado") || '{}');
    }
  }

}
