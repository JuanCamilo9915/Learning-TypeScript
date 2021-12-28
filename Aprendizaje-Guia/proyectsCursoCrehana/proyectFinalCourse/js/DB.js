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
            ProcesandoDatosUsu = class ProcesandoDatosUsu {
                //Constructor
                constructor(detalleP, optionP, valorP) {
                    //Atributos tipo array que almacenan los valores como tipo number
                    this.valorIngresoUsu = [];
                    this.valorGastoUsu = [];
                    this.detalleUsu = detalleP;
                    this.optionUsu = optionP;
                    this.valorUsu = valorP;
                }
                //Métodos Get y Set
                get obtenerDetalle() {
                    return this.detalleUsu;
                }
                set enviarDetalle(detalleP) {
                    this.detalleUsu = detalleP;
                }
                get obtenerOption() {
                    return this.optionUsu;
                }
                set enviarOption(optionP) {
                    this.optionUsu = optionP;
                }
                get obtenerValor() {
                    return this.valorUsu;
                }
                set enviarValor(valorP) {
                    this.valorUsu = valorP;
                }
                //Métodos Set y Get de los valores
                get obtenerValorIngreso() {
                    return this.valorIngresoUsu;
                }
                set enviarValorIngreso(valorIngresoUsuP) {
                    this.valorIngresoUsu.push(valorIngresoUsuP);
                }
                get obtenerValorGasto() {
                    return this.valorGastoUsu;
                }
                set enviarValorGasto(valorGastoUsuP) {
                    this.valorGastoUsu.push(valorGastoUsuP);
                }
                //Método que almacena los datos en LocalStorage
                guardarDatos() {
                    //Guardando datos en localStorage
                    let datosUsu = []; //Se declara el arreglo datosUsu
                    //Almacenan los datos en el arreglo
                    datosUsu.push(this.obtenerDetalle);
                    switch (this.obtenerOption) {
                        case '1':
                            datosUsu.push('Ingreso');
                            break;
                        default:
                            datosUsu.push('Gasto');
                            break;
                    }
                    datosUsu.push(this.obtenerValor);
                    //Se almacena el arreglo con los datos en el LocalStorage
                    localStorage.setItem(`datosUsu${this.obtenerDetalle}`, datosUsu);
                    //Mensaje de Prueba
                    //console.log(`key: ${localStorage.getItem(String(localStorage.key(0)))}`);
                    //INstancia del obj de la clase RecibiendoDatos
                    let datosRecibidos = new recibirDatos_js_1.RecibirDatos();
                    //Enviando los datos del LocalStorage a la tabla
                    datosRecibidos.mostrarDatosUsu(this.traerDatos());
                    //Enviando los arreglos de ingresos y gastos
                    datosRecibidos.arrayIngresos(this.obtenerValorIngreso);
                    datosRecibidos.arrayGastos(this.obtenerValorGasto);
                }
                //Método que trae los datos del LocalStorage
                traerDatos() {
                    let datosUsuLocalStorage = []; //Creando el array para separar los datos del LocalStorage
                    let envioDatosUsu = []; //Creando el array que almacenará los datos del LocalStorage
                    //Recorriendo el LocalStorage
                    for (let i = 0; i < localStorage.length; i++) {
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
                }
                //Método que convierte el tipo de dato de valorLocalStorage
                convirtiendoTipoDatoValor(positionUnoP, positionDosP) {
                    //Evalua si el tipo es Ingreso ó Gasto
                    switch (positionUnoP) {
                        case 'Ingreso':
                            this.enviarValorIngreso = positionDosP;
                            //Mensaje de Prueba
                            //console.log(`case: 1-Tipo: ${positionUnoP}, Valor -$${positionDosP}`);
                            break;
                        default:
                            this.enviarValorGasto = positionDosP;
                            //Mensaje de Prueba
                            //console.log(`default: 2-Tipo: ${positionUnoP}, Valor -$${positionDosP}`);
                            break;
                    }
                }
            };
            exports_1("ProcesandoDatosUsu", ProcesandoDatosUsu);
        }
    };
});
