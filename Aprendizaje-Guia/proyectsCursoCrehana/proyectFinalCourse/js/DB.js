System.register([], function (exports_1, context_1) {
    "use strict";
    var ProcesandoDatosUsu;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            //Clase
            ProcesandoDatosUsu = /** @class */ (function () {
                //private totalSumaAcomulado: number | any;
                //Constructor
                //Forma # 1
                function ProcesandoDatosUsu(detalleP, optionP, valorP) {
                    this.detalleUsu = detalleP;
                    this.optionUsu = optionP;
                    this.valorUsu = valorP;
                }
                Object.defineProperty(ProcesandoDatosUsu.prototype, "obtenerDetalle", {
                    //Métodos Get y Set
                    get: function () {
                        return this.detalleUsu;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ProcesandoDatosUsu.prototype, "enviarDetalle", {
                    set: function (detalleP) {
                        this.detalleUsu = detalleP;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ProcesandoDatosUsu.prototype, "obtenerOption", {
                    get: function () {
                        return this.optionUsu;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ProcesandoDatosUsu.prototype, "enviarOption", {
                    set: function (optionP) {
                        this.optionUsu = optionP;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ProcesandoDatosUsu.prototype, "obtenerValor", {
                    get: function () {
                        return this.valorUsu;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ProcesandoDatosUsu.prototype, "enviarValor", {
                    set: function (valorP) {
                        this.valorUsu = valorP;
                    },
                    enumerable: false,
                    configurable: true
                });
                //Método que almacena los datos en LocalStorage
                ProcesandoDatosUsu.prototype.guardarDatos = function () {
                    //Guardando datos en localStorage
                    localStorage.setItem(this.obtenerDetalle, this.obtenerDetalle);
                    switch (this.obtenerOption) {
                        case '1':
                            localStorage.setItem(this.obtenerDetalle + 'Ingreso', 'Ingreso');
                            break;
                        default:
                            localStorage.setItem(this.obtenerDetalle + 'Gasto', 'Gasto');
                            break;
                    }
                    localStorage.setItem(this.obtenerDetalle + 'Valor', String(this.obtenerValor));
                    //Enviando los datos del LocalStorage a la tabla
                    this.traerDatos();
                };
                //Método que trae los datos del LocalStorage
                ProcesandoDatosUsu.prototype.traerDatos = function () {
                    //Trayendo datos del localStorage
                    /*this.enviarDetalle = String(localStorage.getItem('ServiciosPublicos'));
                    this.enviarOption = String(localStorage.getItem('ServiciosPublicosGasto'));*/
                    this.enviarDetalle = String(localStorage.key(0));
                    this.enviarOption = String(localStorage.key(1));
                    //Convirtiendo el tipo de dato de valorLocalStorage
                    /*this.enviarValor = parseInt(String(localStorage.getItem('ServiciosPublicosValor')), 10);*/
                    this.enviarValor = parseInt(String(localStorage.key(2)));
                };
                ProcesandoDatosUsu.prototype.keyLocalStorage = function () {
                    var datosUsu = [];
                    datosUsu.push(this.obtenerDetalle);
                    datosUsu.push(this.obtenerOption);
                    datosUsu.push(this.obtenerValor);
                    localStorage.setItem("datosUsu".concat(this.obtenerDetalle), datosUsu);
                    console.log("key: ".concat(localStorage.getItem(String(localStorage.key(0)))));
                    //Guardando datos en localStorage
                    /*localStorage.setItem(this.obtenerDetalle, this.obtenerDetalle);
            
                    switch (this.obtenerOption) {
                        case '1':
                            localStorage.setItem(this.obtenerDetalle + 'Ingreso', 'Ingreso');
                            break;
            
                        default:
                            localStorage.setItem(this.obtenerDetalle + 'Gasto', 'Gasto');
                            break;
                    }
            
                    localStorage.setItem(this.obtenerDetalle + 'Valor', String(this.obtenerValor));
            
                    for (let i: number = 0; i < localStorage.length; i++) {
                        console.log('LocalStorage: ' + localStorage.getItem(String(localStorage.key(i))));
                    }*/
                };
                return ProcesandoDatosUsu;
            }());
            exports_1("ProcesandoDatosUsu", ProcesandoDatosUsu);
        }
    };
});
