System.register(["./recibirDatos.js"], function (exports_1, context_1) {
    "use strict";
    var recibirDatos_js_1, ProcesandoDatosUsu;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (recibirDatos_js_1_1) {
                recibirDatos_js_1 = recibirDatos_js_1_1;
            }
        ],
        execute: function () {
            //Clase
            ProcesandoDatosUsu = /** @class */ (function () {
                //Constructor
                function ProcesandoDatosUsu(detalleP, optionP, valorP) {
                    this.valorIngresoUsu = [];
                    this.valorGastoUsu = [];
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
                Object.defineProperty(ProcesandoDatosUsu.prototype, "obtenerValorIngreso", {
                    get: function () {
                        return this.valorIngresoUsu;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ProcesandoDatosUsu.prototype, "enviarValorIngreso", {
                    set: function (valorIngresoUsuP) {
                        this.valorIngresoUsu.push(valorIngresoUsuP);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ProcesandoDatosUsu.prototype, "obtenerValorGasto", {
                    get: function () {
                        return this.valorGastoUsu;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ProcesandoDatosUsu.prototype, "enviarValorGasto", {
                    set: function (valorGastoUsuP) {
                        this.valorGastoUsu.push(valorGastoUsuP);
                    },
                    enumerable: false,
                    configurable: true
                });
                //Método que almacena los datos en LocalStorage
                ProcesandoDatosUsu.prototype.guardarDatos = function () {
                    //Guardando datos en localStorage
                    var datosUsu = []; //Se declara el arreglo datosUsu
                    //Almacenan los datos en el arreglo
                    //datosUsu.push(this.obtenerDetalle);
                    switch (this.obtenerOption) {
                        case '1':
                            //datosUsu.push('Ingreso');        
                            break;
                        default:
                            //datosUsu.push('Gasto');
                            break;
                    }
                    //datosUsu.push(this.obtenerValor);
                    //Se almacena el arreglo con los datos en el LocalStorage
                    //localStorage.setItem(`datosUsu${this.obtenerDetalle}`, datosUsu);
                    //Mensaje de Prueba
                    //console.log(`key: ${localStorage.getItem(String(localStorage.key(0)))}`);
                    //INstancia del obj de la clase RecibiendoDatos
                    var datosRecibidos = new recibirDatos_js_1.RecibirDatos();
                    //Enviando los datos del LocalStorage a la tabla
                    datosRecibidos.mostrarDatosUsu(this.traerDatos());
                };
                //Método que trae los datos del LocalStorage
                ProcesandoDatosUsu.prototype.traerDatos = function () {
                    var datosUsuLocalStorage = []; //Creando el array para separar los datos del LocalStorage
                    var envioDatosUsu = []; //Creando el array que almacenará los datos del LocalStorage
                    //Recorriendo el LocalStorage
                    for (var i = 0; i < localStorage.length; i++) {
                        //Trayendo datos del localStorage
                        //Separando los datos por cada posición del LocalStorage
                        datosUsuLocalStorage = JSON.stringify(localStorage.getItem(String(localStorage.key(i)))).split(',');
                        //Agregando los datos separados al nuevo array
                        envioDatosUsu.push(datosUsuLocalStorage[0]);
                        envioDatosUsu.push(datosUsuLocalStorage[1]);
                        envioDatosUsu.push(datosUsuLocalStorage[2]);
                        //Agregando los valores al tipo de array correspondinete
                        this.convirtiendoTipoDatoValor(datosUsuLocalStorage[1], parseInt(datosUsuLocalStorage[2]));
                    }
                    return envioDatosUsu;
                };
                ProcesandoDatosUsu.prototype.convirtiendoTipoDatoValor = function (positionUnoP, positionDosP) {
                    //Evalua si el tipo es Ingreso ó Gasto
                    switch (positionUnoP) {
                        case 'Ingreso':
                            //this.valorIngresoUsu.push(positionDosP);
                            this.enviarValorIngreso = this.valorIngresoUsu;
                            console.log("case: 1-Tipo: ".concat(positionUnoP, ", Valor -$").concat(positionDosP));
                            break;
                        default:
                            //this.valorGastoUsu.push(positionDosP);
                            this.enviarValorGasto = this.valorGastoUsu;
                            console.log("default: 2-Tipo: $".concat(positionUnoP, ", Valor -$").concat(positionDosP));
                            break;
                    }
                };
                return ProcesandoDatosUsu;
            }());
            exports_1("ProcesandoDatosUsu", ProcesandoDatosUsu);
        }
    };
});
