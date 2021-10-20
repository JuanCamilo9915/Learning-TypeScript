/*
Se configura este proyecto con lite-serve: https://github.com/johnpapa/lite-server
previamente a este paso, se inicializa el proyecto como servidor con el sigte comando: npm init
*/
import * as ClaseAuto from './includes/clases';
//import {Automovil, encenderAuto as encender} from './includes/clases';
import codExportDefault from './includes/clases';

//let miAuto = new Automovil('Camioneta SUV'); --> Cuando se importa individualmente
let miAuto = new ClaseAuto.Automovil('Camioneta SUV');// Cuando se importa de forma general

console.log(miAuto);
ClaseAuto.encenderAuto();// --> Sin el alias
//encender();//Con el alias

//Código exportado por defecto, si no se especifica lo que se va a llamar
codExportDefault();