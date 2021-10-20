"use strict";
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
