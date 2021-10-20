"use strict";
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
