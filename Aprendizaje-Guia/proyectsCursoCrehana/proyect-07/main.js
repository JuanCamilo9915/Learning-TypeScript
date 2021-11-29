"use strict";
/*let auto: Automovil = {

    dimenciones: '4m',
    tipoCombustible: 'Gasolina',
    lucesOn(funcionan: boolean){
        if (funcionan) {
            return 'Luces del carro encendidas';
        } else {
            return 'Las luces del carro estan malas'
        }
    }
    
}*/
var Carro = /** @class */ (function () {
    function Carro(dimenciones, tipoCombustible) {
        this.dimenciones = dimenciones;
        this.tipoCombustible = tipoCombustible;
    }
    //Métodos de la clase Automivil
    Carro.prototype.lucesOn = function () {
        return 'Las luces están encendidas';
    };
    return Carro;
}());
var quieroCorrer;
quieroCorrer = function () {
    return 'Si quiero correr';
};
