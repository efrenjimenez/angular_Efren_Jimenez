import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../modelos/usuario.modelo";

@Injectable()
export class DataService{

    constructor(private httpClient:HttpClient){

    }

    guardarUsuarios(usuarios:Usuario[]){

        this.httpClient.post('https://angular-efren-jimenez-default-rtdb.europe-west1.firebasedatabase.app/datos.json', usuarios).subscribe(

            response=>console.log("Se han guardado los ususarios: "+ response),

            error=>console.log("Error: "+error),
        );
    }

    guardarUsuario(usuario:Usuario){

        this.httpClient.post('https://angular-efren-jimenez-default-rtdb.europe-west1.firebasedatabase.app/datos.json', usuario).subscribe(

            response=>console.log("Se han guardado el usuario: "+ response),

            error=>console.log("Error: "+error),
        );
    }

    recuperarUsuarios(){
        return this.httpClient.get('https://angular-efren-jimenez-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }


}