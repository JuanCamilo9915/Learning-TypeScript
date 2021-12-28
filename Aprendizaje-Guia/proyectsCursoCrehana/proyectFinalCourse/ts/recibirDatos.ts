//Importando Módulos
import { ProcesandoDatosUsu } from './DB.js';

/*Seleccionando los campos de texto.
/*Declarando y definiendo las siguientes variables.*/
const detalle = document.getElementById('uno') as HTMLInputElement;//Utilizando Aserción de tipo
const option = document.getElementById('dos') as HTMLSelectElement;
const valor = document.getElementById('tres') as HTMLInputElement;

/*Seleccionando la tabla*/
const tablaGastosPersonales = document.getElementById('get-table') as HTMLTableElement;
const filasTablaGastos = document.querySelector('#get-table #filas-tabla-gastos') as HTMLTableElement;

//Btn
const btn = document.getElementById('btn-submit') as HTMLButtonElement;

//Clase recibirDatos
export class RecibirDatos {

    //Método que inicia el evento de captura de datos
    public startApp(): void {
        //Escuchando el evento click del btn
        btn.addEventListener('click', this.recibiendoDatos);
    }

    //Método que recibe los datos ingresados por el usuario
    public recibiendoDatos(): void {

        //Eliminan los espacios del string Detalle
        let noEspacios = new RegExp(' ', 'g');//Hace uso de una expresión regular
        let detalleU: String = detalle.value.replace(noEspacios, '');

        //Mensaje de prueba
        console.log(`Detalle: ${detalleU}, Opcción: ${option.value}, valor: ${Number(valor.value)}`);

        //Instanciando el obj de la clase ProcesandoDatosUsu
        const objExportDatosUsu = new ProcesandoDatosUsu();

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
    public mostrarDatosUsu(datosRecibidos: string[]): void {

        /*console.log('fuera del if: ' + datosRecibidos.length);
        if (datosRecibidos[0] != null) {
            console.log('dentro del if');
            datosRecibidos = [];
            console.log('despues de basiar el arreglo');
        }
        console.log('saliendo del if');*/
        const filasTablaGastos = document.querySelector('#get-table #filas-tabla-gastos') as HTMLTableElement;

        //if (filasTablaGastos != null) {
        console.log('filasTablaGastos: ' + filasTablaGastos);
        filasTablaGastos.innerHTML = '';
        //console.log('tablaGastosPersonales: ' + tablaGastosPersonales);
        //tablaGastosPersonales.innerHTML = '';
        //filasTablaGastos.remove();
        //}

        //Se declara el atributo de la fila
        let filaTabla: any;

        //Control de posiciones
        let iteration: Number | any = 1;

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

    public arrayIngresos(ingresosRecibidos: number[]): void {

        for (let i = 0; i < ingresosRecibidos.length; i++) {

            console.log(`IngresosTabla[${i}]: ${ingresosRecibidos[i]}`);

        }

        console.log('\n');

    }

    public arrayGastos(gastosRecibidos: number[]): void {

        for (let i = 0; i < gastosRecibidos.length; i++) {

            console.log(`GastossTabla[${i}]: ${gastosRecibidos[i]}`);

        }

    }

}

//Iniciando App
//Instanciando el obj de la clase
const objRecibirDatos = new RecibirDatos();

objRecibirDatos.startApp();