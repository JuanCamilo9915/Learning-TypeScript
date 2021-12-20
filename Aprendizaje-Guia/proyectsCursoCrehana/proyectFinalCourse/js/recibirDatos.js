"use strict";
/*Seleccionan los campos de texto.
/*Declarando y definiendo las siguientes variables.*/
var detalle = document.getElementById('uno'); //Utilizando Aserción de tipo
var option = document.getElementById('dos');
var valor = document.getElementById('tres');
//Btn
var btn = document.getElementById('btn-submit');
//Clase recibirDatos
var RecibirDatos = /** @class */ (function () {
    //Constructor
    //Forma # 1
    /*constructor(detalleP?: string, optionP?: string, valorP?: number) {
        this.detalleUsu = detalleP;
        this.optionUsu = optionP;
        this.valorUsu = valorP;
    }*/
    //Forma # 2
    function RecibirDatos(gastosPersonalesP) {
        this.detalleUsu = gastosPersonalesP === null || gastosPersonalesP === void 0 ? void 0 : gastosPersonalesP.detalleUsuA;
        this.optionUsu = gastosPersonalesP === null || gastosPersonalesP === void 0 ? void 0 : gastosPersonalesP.optionUsuA;
        this.valorUsu = gastosPersonalesP === null || gastosPersonalesP === void 0 ? void 0 : gastosPersonalesP.valorUsuA;
        this.totalSumaAcomulado = gastosPersonalesP === null || gastosPersonalesP === void 0 ? void 0 : gastosPersonalesP.totalSumaAcumuladoUsuA;
    }
    Object.defineProperty(RecibirDatos.prototype, "obtenerDetalle", {
        //Métodos Get y Set
        get: function () {
            return this.detalleUsu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecibirDatos.prototype, "enviarDetalle", {
        set: function (detalleP) {
            this.detalleUsu = detalleP;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecibirDatos.prototype, "obtenerOption", {
        get: function () {
            return this.optionUsu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecibirDatos.prototype, "enviarOption", {
        set: function (optionP) {
            this.optionUsu = optionP;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecibirDatos.prototype, "obtenerValor", {
        get: function () {
            return this.valorUsu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecibirDatos.prototype, "enviarValor", {
        set: function (valorP) {
            this.valorUsu = valorP;
        },
        enumerable: false,
        configurable: true
    });
    //Método que recibe los datos ingresados por el usuario
    RecibirDatos.prototype.recibiendoDatos = function () {
        //Utilizando los métodos set y get de los atributos de está clase
        this.enviarDetalle = detalle.value;
        this.enviarOption = option.value;
        this.enviarValor = Number(valor.value);
        console.log("Detalle: ".concat(this.obtenerDetalle, ", Opcci\u00F3n: ").concat(this.obtenerOption, ", valor: ").concat(this.obtenerValor));
    };
    return RecibirDatos;
}());
//Escuchando el evento click del btn
btn.addEventListener('click', function (e) {
    e.preventDefault();
    //Instanciando el obj de la clase
    var objRecibirDatos = new RecibirDatos();
    objRecibirDatos.recibiendoDatos();
});
