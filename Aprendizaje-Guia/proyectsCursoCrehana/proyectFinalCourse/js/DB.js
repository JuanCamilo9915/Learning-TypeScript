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
                    console.log("key: ".concat(localStorage.getItem(String(localStorage.key(0)))));
                    //Enviando los datos del LocalStorage a la tabla
                    this.traerDatos();
                };
                //Método que trae los datos del LocalStorage
                ProcesandoDatosUsu.prototype.traerDatos = function () {
                    //Trayendo datos del localStorage
                    var strSeparadoLocalStorage = new Array(); //Creando el array para separar los datos del LocalStorage
                    //let strSeparadoF: string[][] = new Array();//Creando la matriz que almacenará los datos del LocalStorage
                    var strSeparadoF = [[]];
                    //Recorriendo el LocalStorage
                    for (var i = 0; i < localStorage.length; i++) {
                        //Separando los datos por cada posición del LocalStorage
                        //strSeparadoLocalStorage = JSON.stringify(localStorage.getItem(String(localStorage.key(i)))).split(',');
                        //strSeparadoLocalStorage = JSON.stringify(localStorage.getItem(String(localStorage.key(i)))).split(',');
                        //Comentario
                        /*console.log(`i = ${i}, TamañoLocalStorage = ${localStorage.length},
                        dato = ${localStorage.getItem(String(localStorage.key(i)))},
                        typeOf LocalStorage = ${typeof localStorage},
                        JSON.stringify = ${JSON.stringify(localStorage.getItem(String(localStorage.key(i))))},
                        StringSeparado = ${strSeparado}`);*/
                        //Agregando los datos separados al nuevo array
                        //strSeparadoF.push(strSeparadoLocalStorage);
                        //console.log(`strSeparadoF: ${strSeparadoF}`);
                        /*for (let j = 0; j < strSeparadoLocalStorage.length; j++) {
                            console.log(`i(Test): ${i}`);
                            //strSeparadoF[i][j] = strSeparadoLocalStorage[j];
                            strSeparadoF.push(strSeparadoLocalStorage);
                            console.log(`strSeparadoF = ${strSeparadoF}, trSeparadoF 2 = ${strSeparadoF[i][j]}`);
            
                        }*/
                    }
                    return strSeparadoF;
                    /*console.log(`strSeparado, Fuera del for: ${strSeparado.length},
                    posición 1: ${strSeparado[0]},
                    posición 2: ${strSeparado[1]},
                    posición 3: ${strSeparado[2]}`);*/
                    //Trayendo los gastos personales, por cada posición del LocalStorage
                    /*for (let j: number = 0; j < 7; j++) {
                        
                        
                    }*/
                };
                ProcesandoDatosUsu.prototype.traerDatosTest = function () {
                    var str = '';
                    var array1 = [];
                    var array2 = [];
                    for (var i = 0; i < localStorage.length; i++) {
                        array1 = JSON.stringify(localStorage.getItem(String(localStorage.key(i)))).split(',');
                        array2.push(array1[0]);
                        array2.push(array1[1]);
                        array2.push(array1[2]);
                    }
                    return array2;
                };
                return ProcesandoDatosUsu;
            }());
            exports_1("ProcesandoDatosUsu", ProcesandoDatosUsu);
        }
    };
});
