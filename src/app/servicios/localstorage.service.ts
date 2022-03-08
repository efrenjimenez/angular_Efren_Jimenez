import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  data: string | null=null;

  constructor() {

  }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error al guardar', e);
    }
  }

  get(key: string): any {
    try {
      this.data=localStorage.getItem(key);
      if(this.data==null){
        return null;
      }
      else{
        return JSON.parse(this.data);
      }
    } catch (e) {
      console.error('Error al recuperar', e);
      return null;
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error al borrar', e);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error al limpiar', e);
    }
  }

}
