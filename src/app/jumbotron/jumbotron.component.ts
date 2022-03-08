import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  //clase="btn btn-warning btn-lg"
  color: string ="azul";
  forma: string = "cuadrada";

  srcFoto: string ="assets/img/inicio.jpg";

  cambiarFoto(){
    if(this.srcFoto=="assets/img/inicio.jpg"){
      this.srcFoto="assets/img/t1_completa2.jpg"
      console.log("primero")
    }
    else if(this.srcFoto!="assets/img/inicio.jpg"){
      console.log("segundo")
      this.srcFoto="assets/img/inicio.jpg"
    }
  }

  redondear(){
    if(this.forma=='cuadrada'){
      this.forma="ovalada";
    }
    else if(this.forma=='ovalada'){
      this.forma="cuadrada";
    }

  }

  constructor() { 
      setInterval(() => {
            //this.clase= 'btn btn-success btn-lg';
            this.color="amarillo";
            setTimeout(() => {
              //this.clase= 'btn btn-warning btn-lg';
              this.color="azul";
        }, 1000);
      }, 4000);

  }

  ngOnInit(): void {
  }

}
