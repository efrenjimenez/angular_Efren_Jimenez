import { getModuleFactory, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  autor={nombre: 'efrén', apellidos: 'jiménez carrión'};
  curso: String='2º daw';
  asignatura: String='desarrollo web en entorno cliente'

  getAutor(){
    return this.autor;
  }

  getCurso(){
    return this.curso;
  }

  getAsignatura(){
    return this.asignatura;
  }

  constructor() { }
}
