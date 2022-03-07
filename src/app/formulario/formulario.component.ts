import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario.modelo';
import { UsuariosService } from '../servicios/usuarios.service';
import { LocalstorageService } from '../servicios/localstorage.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('formusu') formusu!: NgForm;
  usuario: Usuario;

  constructor(private usuariosService: UsuariosService, private localStorageService: LocalstorageService) {
    this.usuario = {
      id:0,
      nombre:'',
      apellidos:'',
      email:'',
      fechaNac:'',
      nick:'',
      password:'',
    }
  }

  onSubmit(){
    this.usuario=new Usuario(
      this.formusu.value.nombre, 
      this.formusu.value.apellidos, 
      this.formusu.value.email, 
      this.formusu.value.fechaNac,
      this.formusu.value.nick,
      this.formusu.value.password, 
    )

    // this.usuario.nombre=this.formusu.value.nombre;
    // this.usuario.apellidos=this.formusu.value.apellidos;
    // this.usuario.email=this.formusu.value.email;
    // this.usuario.password=this.formusu.value.password;
    // this.usuario.fechaNac=this.formusu.value.fechaNac;

    this.formusu.reset();
    
    this.usuariosService.insertUsuario(this.usuario);
    this.localStorageService.set("usuarios", this.usuariosService.getUsuarios())

    this.localStorageService.set(this.usuario.nick, this.usuario);
  }

  ngOnInit(): void {

  }

}
