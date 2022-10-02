import { Persona } from "./Persona";

export class Futbolista extends Persona{
    protected dorsal:number;
    protected titular:boolean;
    protected posicion: string;

    constructor(pNombre:string,pApellido:string,pEdad:number,pDorsal:number,pTitular:boolean,pPosicion:string){
        super(pNombre,pApellido,pEdad);
        this.dorsal=pDorsal;
        this.titular=pTitular;
        this.posicion=pPosicion;
    }
    public getDorsal():number{
        return this.dorsal;
    }
    public setDorsal(pDorsal:number):void{
        this.dorsal=pDorsal;
        console.log('Se cambió el dorsal del jugador: '+ this.apellido ,''+this.nombre,'el nuevo número es: '+this.dorsal);
    }
    public getTitular():boolean{
        return this.titular;
    }
    public setTitular(pTitular:boolean):void{
        this.titular=pTitular;
        if(this.titular==true){
            console.log('El jugador '+ this.nombre ,''+ this.apellido,'es Titular');
        }else {
            console.log('El jugador '+ this.nombre ,''+ this.apellido,'es Suplente');
        }
    }
    public getPosicion():string{
        return this.posicion;
    }
    public setPosicion(pPosicion:string){
        this.posicion=pPosicion;
        console.log('Se cambió la posición del jugador: '+ this.apellido ,''+this.nombre,'la nueva posición es: '+this.posicion);
    }
}