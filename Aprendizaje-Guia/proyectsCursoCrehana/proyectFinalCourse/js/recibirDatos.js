System.register(["./DB.js"], function (exports_1, context_1) {
    "use strict";
    var DB_js_1, detalle, option, valor, tablaGastosPersonales, filasTablaGastos, btn, RecibirDatos, objRecibirDatos;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DB_js_1_1) {
                DB_js_1 = DB_js_1_1;
            }
        ],
        execute: function () {
            /*Seleccionando los campos de texto.
            /*Declarando y definiendo las siguientes variables.*/
            detalle = document.getElementById('uno'); //Utilizando Aserción de tipo
            option = document.getElementById('dos');
            valor = document.getElementById('tres');
            /*Seleccionando la tabla*/
            tablaGastosPersonales = document.getElementById('get-table');
            filasTablaGastos = document.querySelector('#get-table #filas-tabla-gastos');
            //Btn
            btn = document.getElementById('btn-submit');
            //Clase recibirDatos
            RecibirDatos = class RecibirDatos {
                //Método que inicia el evento de captura de datos
                startApp() {
                    //Escuchando el evento click del btn
                    btn.addEventListener('click', this.recibiendoDatos);
                }
                //Método que recibe los datos ingresados por el usuario
                recibiendoDatos() {
                    //Eliminan los espacios del string Detalle
                    let noEspacios = new RegExp(' ', 'g'); //Hace uso de una expresión regular
                    let detalleU = detalle.value.replace(noEspacios, '');
                    //Mensaje de prueba
                    console.log(`Detalle: ${detalleU}, Opcción: ${option.value}, valor: ${Number(valor.value)}`);
                    //Instanciando el obj de la clase ProcesandoDatosUsu
                    const objExportDatosUsu = new DB_js_1.ProcesandoDatosUsu();
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
                    //Mensaje de Prueba
                    //console.log(`ArrayIngresos: $${objExportDatosUsu.obtenerValorIngreso}, ArrayGastos -$${objExportDatosUsu.obtenerValorGasto}`);       }
                    //Llamando al método Ingresos
                    //this.arrayIngresos();
                    //Llamando al método Gastos
                    //private totalSumaAcomulado: number | any;
                }
                //Método que muestra los datos enviados del LocalStorage
                mostrarDatosUsu(datosRecibidos) {
                    /*console.log('fuera del if: ' + datosRecibidos.length);
                    if (datosRecibidos[0] != null) {
                        console.log('dentro del if');
                        datosRecibidos = [];
                        console.log('despues de basiar el arreglo');
                    }
                    console.log('saliendo del if');*/
                    const filasTablaGastos = document.querySelector('#get-table #filas-tabla-gastos');
                    //if (filasTablaGastos != null) {
                    console.log('filasTablaGastos: ' + filasTablaGastos);
                    filasTablaGastos.innerHTML = '';
                    //console.log('tablaGastosPersonales: ' + tablaGastosPersonales);
                    //tablaGastosPersonales.innerHTML = '';
                    //filasTablaGastos.remove();
                    //}
                    //Se declara el atributo de la fila
                    let filaTabla;
                    //Control de posiciones
                    let iteration = 1;
                    for (let i = 0; i < datosRecibidos.length; i++) {
                        //Mensaje de Prueba
                        console.log(`DatosTabla[${i}]: ${datosRecibidos[i]}, iteration: ${iteration}`);
                        //Agregando una fila a la tabla
                        if (iteration == 1) {
                            //filaTabla = tablaGastosPersonales.insertRow();
                            filaTabla = filasTablaGastos.insertRow();
                        }
                        switch (iteration) {
                            case 1:
                                //Agregando columnas a cada fila de la tabla
                                let colDetalle = filaTabla.insertCell(0);
                                colDetalle.innerHTML = datosRecibidos[i];
                                break;
                            case 2:
                                let colTipo = filaTabla.insertCell(1);
                                colTipo.innerHTML = datosRecibidos[i];
                                break;
                            default:
                                let colValor = filaTabla.insertCell(2);
                                colValor.innerHTML = datosRecibidos[i];
                                iteration = 0;
                                break;
                        }
                        iteration++;
                    }
                }
                arrayIngresos(ingresosRecibidos) {
                    for (let i = 0; i < ingresosRecibidos.length; i++) {
                        console.log(`IngresosTabla[${i}]: ${ingresosRecibidos[i]}`);
                    }
                    console.log('\n');
                }
                arrayGastos(gastosRecibidos) {
                    for (let i = 0; i < gastosRecibidos.length; i++) {
                        console.log(`GastossTabla[${i}]: ${gastosRecibidos[i]}`);
                    }
                }
            };
            exports_1("RecibirDatos", RecibirDatos);
            //Iniciando App
            //Instanciando el obj de la clase
            objRecibirDatos = new RecibirDatos();
            objRecibirDatos.startApp();
        }
    };
});
