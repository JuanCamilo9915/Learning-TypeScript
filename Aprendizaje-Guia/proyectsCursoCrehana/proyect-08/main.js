//NameSpace
var codPublic;
(function (codPublic) {
    function saludo() {
        console.log('Hellow World');
    }
    codPublic.saludo = saludo;
    function despedida() {
        console.log('Bye');
    }
    codPublic.despedida = despedida;
    var Persona = /** @class */ (function () {
        function Persona(name) {
            this.name = name;
        }
        return Persona;
    }());
    codPublic.Persona = Persona;
})(codPublic || (codPublic = {}));
var codPublic;
(function (codPublic) {
    function sumar() {
        console.log(5 + 5);
    }
    codPublic.sumar = sumar;
    function multiplicar() {
        console.log(5 * 5);
    }
    codPublic.multiplicar = multiplicar;
})(codPublic || (codPublic = {}));
//Reconociendo NameSpace
///<reference path="includes/saludos.ts"/>
///<reference path="includes/operaciones.ts"/>
codPublic.saludo();
codPublic.despedida();
var personal = new codPublic.Persona('Juan Camilo');
console.log(personal);
/*Nota Importante:
    los namespace hay que tener en cuenta la ejecución del código tsc --outFile ***, en consola
*/ 
