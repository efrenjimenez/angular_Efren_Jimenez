export class Usuario {
    static cont=2;
    public id:number = 0;
    public nombre: string;
    public apellidos: string;
    public email: string;
    public fechaNac: string;
    public nick: string;
    public password: string;



    constructor(nombre: string, apellidos: string, email: string, fechaNac: string, nick: string, password: string) {
        this.id=++Usuario.cont;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.fechaNac = fechaNac;
        this.nick = nick;
        this.password = password;

    }
}
