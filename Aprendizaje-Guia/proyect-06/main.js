"use strict";
var AutomovilUnico = /** @class */ (function () {
    function AutomovilUnico(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    AutomovilUnico.fabricarAutoUnico = function (marca, modelo) {
        if (!AutomovilUnico.instancia) {
            AutomovilUnico.instancia = new AutomovilUnico(marca, modelo);
        }
        return AutomovilUnico.instancia;
    };
    return AutomovilUnico;
}());
var miAutoUnico = AutomovilUnico.fabricarAutoUnico('BMW', 2022);
var otroAutoUnico = AutomovilUnico.fabricarAutoUnico('Audi', 2032);
console.log(miAutoUnico);
console.log(otroAutoUnico);
