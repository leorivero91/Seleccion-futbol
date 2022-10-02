import { Futbolista } from "./Futbolista";
import { Entrenador } from "./Entrenador";
import { Masajista } from "./Masajista";
import { SeleccionFutbol } from "./SeleccionFutbol";


let Futbolista1: Futbolista= new Futbolista ('Jose','Martinez',24,1,true,'Arquero');
let Futbolista2: Futbolista= new Futbolista ('Gonzalo','Montiel',23,4,true,'Defensor');
let Futbolista3: Futbolista= new Futbolista ('Enzo','Fernandez',22,5,true,'Mediocampista');
let Futbolista4: Futbolista= new Futbolista ('Lionel','Messi',34,10,true,'Delantero');
let Futbolista5: Futbolista= new Futbolista ('Julian','Alvarez',24,9,true,'Delantero');
let Futbolista6: Futbolista= new Futbolista ('Paulo','Dybala',26,16,false,'Mediocampista');


let entrenador1: Entrenador = new Entrenador("Lionel", "Scaloni",45,"Argentino");
let entrenador2: Entrenador = new Entrenador("Pep", "Guardiola",48, "España");

let masajista1 : Masajista = new Masajista ("Juan", "Benitez",24,false); 
let masajista2 : Masajista = new Masajista ("José", "Juarez",46,false); 

let seleccionFutbol1 : SeleccionFutbol = new SeleccionFutbol("Argentina");
let seleccionFutbol2 : SeleccionFutbol = new SeleccionFutbol("España");

console.log("El jugador "+ Futbolista1.getNombre(),""+ Futbolista1.getApellido(), "tiene la camiseta número "+ Futbolista1.getDorsal());
Futbolista1.setDorsal(15);
console.log(Futbolista1);
Futbolista3.setPosicion('Arquero');
Futbolista1.setPosicion('Delantero');
Futbolista5.setTitular(false);
Futbolista2.setTitular(false);
Futbolista6.setTitular(true);
console.log(Futbolista1, Futbolista2, Futbolista3 , Futbolista4 , Futbolista5 , Futbolista6);

console.log(masajista1);
masajista1.hacerMasajes(true);
masajista2.hacerMasajes(false);
console.log(masajista2);

console.log ("El entrenador "+entrenador1.getNombre(),""+entrenador1.getApellido(),"es",entrenador1.getNacionalidad());
entrenador1.getApellido();
entrenador2.setNacionalidad('Argentina');
console.log(entrenador2);

seleccionFutbol1.setPaisSeleccion("Uruguay");
seleccionFutbol2.getPaisSeleccion();
seleccionFutbol1.setPaisSeleccion('Argentina');
console.log(seleccionFutbol1 , seleccionFutbol2);

