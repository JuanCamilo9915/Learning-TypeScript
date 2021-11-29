"use strict";
//Decorador
/*@primerDecorador
function operarFuncion(){
    console.log('message');
}*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function encenderAuto(constructor) {
    constructor();
}
var Auto = /** @class */ (function () {
    function Auto() {
        console.log('Motor Arrancado');
    }
    Auto = __decorate([
        encenderAuto //Llamada al decorador encenderAuto
    ], Auto);
    return Auto;
}());
/*******************************************************************************************************************/
//Decoradores de Propiedad
function editable(esEditable) {
    return function (objetivo, nombrePropiedad) {
        var descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
var vehiculo = /** @class */ (function () {
    function vehiculo() {
        this.placa = 123;
    }
    __decorate([
        editable(true)
    ], vehiculo.prototype, "placa", void 0);
    return vehiculo;
}());
var motoNueva = new vehiculo();
/*******************************************************************************************************************/
//Decoradores de Métodos
function editable2(esEditable) {
    return function (objetivo, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
var Animales = /** @class */ (function () {
    function Animales() {
        this.tipoAnimal = 'Águila';
    }
    Animales.prototype.decirAguila = function () {
        console.log("es un " + this.tipoAnimal);
    };
    __decorate([
        editable2(true)
    ], Animales.prototype, "decirAguila", null);
    return Animales;
}());
var animal = new Animales();
animal.decirAguila = function () {
    console.log('Halcón');
};
/*******************************************************************************************************************/
//Decoradores con argumentos
function ejecutarConstructor(constructor) {
    constructor();
    console.log(constructor);
}
var Universidades = /** @class */ (function () {
    function Universidades() {
        console.log('Hola');
    }
    Universidades = __decorate([
        seDebeEjecutarConstructor(true)
    ], Universidades);
    return Universidades;
}());
function seDebeEjecutarConstructor(respuesta) {
    if (respuesta) {
        return ejecutarConstructor;
    }
    else {
        return null;
    }
}
