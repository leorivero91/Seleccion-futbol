import { Persona } from "./Persona";

export class Masajista extends Persona {
    protected masajes:boolean;
        
    constructor (pNombre:string, pApellido:string,pEdad:number, pMasajes:boolean){
    super (pNombre,pApellido,pEdad);
    this.masajes=pMasajes;
    }
       
    public hacerMasajes(masajes:boolean):void{
        if (masajes==true) {
            console.log ("El masajista "+ this.nombre,""+ this.apellido,"debe realizar masaje");
        } else { 
         console.log ("El masajista "+this.nombre,""+this.apellido, "no debe realizar masajes");
            }
    }
}

