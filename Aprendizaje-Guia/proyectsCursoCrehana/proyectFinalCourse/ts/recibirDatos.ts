//Importando Módulos
import { ProcesandoDatosUsu } from './DB.js';

/*Seleccionan los campos de texto.
/*Declarando y definiendo las siguientes variables.*/
const detalle = document.getElementById('uno') as HTMLInputElement;//Utilizando Aserción de tipo
const option = document.getElementById('dos') as HTMLSelectElement;
const valor = document.getElementById('tres') as HTMLInputElement;

//Btn
const btn = document.getElementById('btn-submit') as HTMLButtonElement;

//Clase recibirDatos
export class RecibirDatos {
    /*//Atributo
    private datosRecibidos: string[] = [];

    //Métodos Get y Set
    public get obtenerDatos(): string[] {
        return this.datosRecibidos;
    }

    public set enviarDatos(datosRecibidosP: string[]) {
        this.datosRecibidos = datosRecibidosP;
    }*/

    //Método que inicia el evento de captura de datos
    public startApp(): void {
        //Escuchando el evento click del btn
        btn.addEventListener('click', this.recibiendoDatos);
    }

    //Método que recibe los datos ingresados por el usuario
    public recibiendoDatos(): void {

        //Eliminan los espacios del string Detalle
        let noEspacios = new RegExp(' ','g');//Hace uso de una expresión regular
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

        //let a: string[] = 
        //Se llama al método set de la clase
        //this.enviarDatos = objExportDatosUsu.traerDatos();

        console.log(`Detalles: ${objExportDatosUsu.obtenerDetalle},
        Opciones:  ${objExportDatosUsu.obtenerOption},
        Valor($$$): ${objExportDatosUsu.obtenerValor}`);

        //Mensaje de Prueba
        //console.log(`ArrayIngresos: $${objExportDatosUsu.obtenerValorIngreso}, ArrayGastos -$${objExportDatosUsu.obtenerValorGasto}`);

        //private totalSumaAcomulado: number | any;
    }

    //Método que muestra los datos enviados del LocalStorage
    public mostrarDatosUsu(datosRecibidos: string[]): void {

        for (let i = 0; i < datosRecibidos.length; i++) {
            
            console.log(`testArray[${i}]: ${datosRecibidos[i]}`);
            
        }
    }

}

//Iniciando App
//Instanciando el obj de la clase
const objRecibirDatos = new RecibirDatos();

objRecibirDatos.startApp();