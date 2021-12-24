System.register(["./DB.js"], function (exports_1, context_1) {
    "use strict";
    var DB_js_1, detalle, option, valor, btn, RecibirDatos, objRecibirDatos;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DB_js_1_1) {
                DB_js_1 = DB_js_1_1;
            }
        ],
        execute: function () {
            /*Seleccionan los campos de texto.
            /*Declarando y definiendo las siguientes variables.*/
            detalle = document.getElementById('uno'); //Utilizando Aserción de tipo
            option = document.getElementById('dos');
            valor = document.getElementById('tres');
            //Btn
            btn = document.getElementById('btn-submit');
            //Clase recibirDatos
            RecibirDatos = /** @class */ (function () {
                function RecibirDatos() {
                }
                //Método que inicia el evento de captura de datos
                RecibirDatos.prototype.startApp = function () {
                    //Escuchando el evento click del btn
                    btn.addEventListener('click', this.recibiendoDatos);
                };
                //Método que recibe los datos ingresados por el usuario
                RecibirDatos.prototype.recibiendoDatos = function () {
                    //Eliminan los espacios del string Detalle
                    var noEspacios = new RegExp(' ', 'g'); //Hace uso de una expresión regular
                    var detalleU = detalle.value.replace(noEspacios, '');
                    console.log("Detalle: ".concat(detalleU, ", Opcci\u00F3n: ").concat(option.value, ", valor: ").concat(Number(valor.value)));
                    //Instanciando el obj de la clase ProcesandoDatosUsu
                    var objExportDatosUsu = new DB_js_1.ProcesandoDatosUsu();
                    //Enviando los datos con sus métodos set
                    objExportDatosUsu.enviarDetalle = String(detalleU);
                    objExportDatosUsu.enviarOption = option.value;
                    objExportDatosUsu.enviarValor = Number(valor.value);
                    //llamando al método guardar del obj ProcesandoDatosUsu
                    objExportDatosUsu.guardarDatos();
                    //Limpiando los campos de texto
                    detalle.value = '';
                    option.value = '';
                    valor.value = '';
                    //Mostrar los datos enviados del LocalStorage
                    //console.log(`datosrecibidos: ${objExportDatosUsu.traerDatos()}`);
                    console.log("testArray: ".concat(objExportDatosUsu.traerDatosTest()));
                    console.log("testArray[0]: ".concat(objExportDatosUsu.traerDatosTest()[5]));
                    console.log("Detalles: ".concat(objExportDatosUsu.obtenerDetalle, ",\n        Opciones:  ").concat(objExportDatosUsu.obtenerOption, ",\n        Valor($$$): ").concat(objExportDatosUsu.obtenerValor));
                };
                return RecibirDatos;
            }());
            //Iniciando App
            //Instanciando el obj de la clase
            objRecibirDatos = new RecibirDatos();
            objRecibirDatos.startApp();
        }
    };
});
