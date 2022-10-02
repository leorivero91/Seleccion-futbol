export class Persona{
    protected nombre:string;
    protected apellido:string;
    protected edad:number;
  
    constructor (pNombre:string, pApellido:string,pEdad:number){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.edad=pEdad;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(pNombre:string):void{
        this.nombre=pNombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    public setApellido(pApellido:string):void{
        this.apellido=pApellido;
    }
    public getEdad():number{
        return this.edad;
    }
    public setEdad(pEdad:number):void{
        this.edad=pEdad;
    }
}