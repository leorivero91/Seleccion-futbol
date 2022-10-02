export class SeleccionFutbol {
    private paisSeleccion:string;

    constructor(pPaisSeleccion:string){
        this.paisSeleccion=pPaisSeleccion;
    }
    public getPaisSeleccion():string{
        return this.paisSeleccion;
    }
    public setPaisSeleccion(pPaisSeleccion:string):void{
        this.paisSeleccion=pPaisSeleccion;
    }
}
