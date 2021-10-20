//Reconociendo NameSpace
///<reference path="includes/saludos.ts"/>
///<reference path="includes/operaciones.ts"/>

codPublic.saludo();
codPublic.despedida();

let personal = new codPublic.Persona('Juan Camilo');

console.log(personal);

/*Nota Importante:
    los namespace hay que tener en cuenta la ejecución del código tsc --outFile ***, en consola
*/