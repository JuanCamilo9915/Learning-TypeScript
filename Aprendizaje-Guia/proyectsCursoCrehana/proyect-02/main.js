"use strict";
//Clases en TypeScript
var Carro = /** @class */ (function () {
    //Método Constructor
    /*constructor(marcaV: String, modeloV: number, enciendeV: boolean){
        console.log(`Hellow soy el constructor`);
        this.marca = marcaV;
        this.modelo = modeloV;
        this.enciende = enciendeV;
    }*/
    function Carro(marcaV, modeloV, enciendeV) {
        this.marcaV = marcaV;
        this.modeloV = modeloV;
        this.enciendeV = enciendeV;
        console.log("Hellow soy el constructor");
    }
    Carro.infoCar = function () {
        console.log('Hola, soy un método estatico, ' + Carro.dimRin);
    };
    Carro.prototype.mostrarMarca = function () {
        console.log(this.mensaje() + " " + this.marcaV);
    };
    Carro.prototype.mensaje = function () {
        return 'La marca es: ';
    };
    /*public marca: String;
    private modelo: number;
    protected enciende: boolean;*/
    Carro.dimRin = 13;
    return Carro;
}());
var myCar = new Carro('BMW', 2022, true, 13);
/*console.log(`my car: ${myCar.marca}, ${myCar.modelo}, ${myCar.enciende}`);

let myCar2 = new Carro('Audi',2000,false);
console.log(myCar2);*/
Carro.infoCar();
myCar.mostrarMarca();
