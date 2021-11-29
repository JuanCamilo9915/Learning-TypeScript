"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(tipo) {
        this.tipo = tipo;
    }
    Vehiculo.prototype.alertarSobreElTipo = function () {
        alert(this.tipo);
    };
    Vehiculo.prototype.obtenerTipo = function () {
        return this.tipo;
    };
    return Vehiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(tipo, motor) {
        var _this = _super.call(this, tipo) || this;
        _this.motor = motor;
        console.log('El tipo es: ' + _super.prototype.obtenerTipo.call(_this));
        return _this;
    }
    return Carro;
}(Vehiculo));
var carro1 = new Carro('sedan', '1.4 ltrs');
var tipoCar = carro1.tipo;
var motorCar = carro1.motor;
console.log("Carro 1: " + carro1.tipo);
console.log("Carro 1: " + carro1.motor);
console.log("Carro 1: " + carro1);
//Se muestra en el navegador
/*document.write(tipoCar.toString());
document.write(motorCar.toString());*/
/*message1 = document.write(tipoCar.toString());
message2 = document.write(motorCar.toString());*/
//Selección de elementos
var conte1, conte2, message1, message2;
conte1 = document.querySelector('.tipo-carro');
conte2 = document.querySelector('.motor-carro');
message1 = document.createElement('b');
message2 = document.createElement('b');
message1.innerText = "Tipo: " + tipoCar;
message2.innerText = "Motor: " + motorCar;
conte1 === null || conte1 === void 0 ? void 0 : conte1.append(message1);
conte2 === null || conte2 === void 0 ? void 0 : conte2.append(message2);
//message1?.innerHTML = carro1.tipo; --> lo muestra pero presenta error, debido a que carro1, no es un elemento del DOM
