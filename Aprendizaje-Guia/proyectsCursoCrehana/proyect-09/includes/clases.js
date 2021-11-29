"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encenderAuto = exports.Automovil = void 0;
var Automovil = /** @class */ (function () {
    function Automovil(tipo) {
        this.tipo = tipo;
    }
    return Automovil;
}());
exports.Automovil = Automovil;
function encenderAuto() {
    console.log('Vehículo Encendido');
}
exports.encenderAuto = encenderAuto;
function apagarAuto() {
    console.log('Vehículo Apagado');
}
exports.default = apagarAuto;
