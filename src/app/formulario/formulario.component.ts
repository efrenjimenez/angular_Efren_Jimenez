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
  fechaActual: any = new Date();
  fechaForm: any;

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

    this.fechaForm=new Date(this.formusu.value.fechaNac);

    if(this.localStorageService.get(this.formusu.value.nick)!= null){
      alert("El usuario ya existe")
    }
    else if(this.fechaForm>this.fechaActual){
      alert("La fecha no puede ser posterior al día de hoy")
    }
    else if(this.formusu.value.password != this.formusu.value.password2){
      alert("La contraseñas no coinciden")
    }
    else{
      
      this.formusu.reset();
      
      this.usuariosService.insertUsuario(this.usuario);
      this.localStorageService.set("usuarios", this.usuariosService.getUsuarios())
      
      this.localStorageService.set(this.usuario.nick, this.usuario);
      alert("Usuario "+this.usuario.nick+" dado del alta")
    }
  }



  ngOnInit(): void {

  }

}
