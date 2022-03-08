import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../modelos/login.modelo';
import { Usuario } from '../modelos/usuario.modelo';
import { LocalstorageService } from '../servicios/localstorage.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formlog') formlog!: NgForm;
  cont: number=0;
  login: Login;
  usuarioLogeado: Usuario | undefined;

  constructor(private LocalstorageService: LocalstorageService, private UsuarioService: UsuariosService) {
    this.login = {
      nick:'',
      password:''
    }
  }

  onSubmit(){
    this.login.nick=this.formlog.value.nick;
    this.login.password=this.formlog.value.password;

    this.usuarioLogeado=this.LocalstorageService.get(this.login.nick);
    
    if(this.usuarioLogeado==null){
      console.log(this.usuarioLogeado==null)
      alert("El usuario no existe")
      sessionStorage.setItem("logeado", "false")
    }
    else if(this.usuarioLogeado.password==this.login.password){
        sessionStorage.setItem("logeado", "true")
        sessionStorage.setItem("usuarioLogeado", JSON.stringify(this.usuarioLogeado))
        //this.UsuarioService.setUsuarioLogeado(this.usuarioLogeado)
        alert("Sesión iniciada como "+this.usuarioLogeado.nick)
        location.href=""

        
      }
    else{
      alert("Contraseña incorrecta")
      sessionStorage.setItem("logeado", "false")
      sessionStorage.removeItem("usuarioLogeado")
    }
      
    

    this.formlog.reset();
  }

  ngOnInit(): void {
  }

}
