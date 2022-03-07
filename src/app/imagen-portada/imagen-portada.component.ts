import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-portada',
  templateUrl: './imagen-portada.component.html',
  styleUrls: ['./imagen-portada.component.css']
})
export class ImagenPortadaComponent implements OnInit {

  srcFoto="../assets/img/inicio.jpg"

  cambiarFoto(){
    this.srcFoto="../assets/img/t1_completa2.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
