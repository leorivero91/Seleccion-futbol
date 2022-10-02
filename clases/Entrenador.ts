import { Persona } from "./Persona";

export class Entrenador extends Persona{
        protected nacionalidad:string;
        
        constructor (pNombre: string,pApellido:string,pEdad:number,pNacionalidad:string,  ){
            super(pNombre,pApellido,pEdad);
            this.nacionalidad = pNacionalidad;
        }
        public getNacionalidad():string{
            return this.nacionalidad;
        } 
        public setNacionalidad(nacionalidad : string):void{
            this.nacionalidad=nacionalidad;
        }
}
