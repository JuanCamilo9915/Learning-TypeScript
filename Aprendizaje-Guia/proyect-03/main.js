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
    Carro.prototype.render = function () {
        var message = document.querySelector('.carro');
    };
    return Carro;
}(Vehiculo));
var carro1 = new Carro('sedan', '1.4 ltrs');
console.log("Carro 1: " + carro1.tipo);
console.log("Carro 1: " + carro1.motor);
console.log("Carro 1: " + carro1);
