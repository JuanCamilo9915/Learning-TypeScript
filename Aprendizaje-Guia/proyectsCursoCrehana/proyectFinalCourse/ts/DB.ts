//Importando Módulos
import { RecibirDatos } from './recibirDatos.js';

//Clase
export class ProcesandoDatosUsu {
    //Atributos
    private detalleUsu: String | any;
    private optionUsu: string | any;
    private valorUsu: number | any;
    //Atributos tipo array que almacenan los valores como tipo number
    private valorIngresoUsu: number[] | any = [];
    private valorGastoUsu: number[] | any = [];

    //Constructor
    constructor(detalleP?: string, optionP?: string, valorP?: number) {
        this.detalleUsu = detalleP;
        this.optionUsu = optionP;
        this.valorUsu = valorP;
    }

    //Métodos Get y Set
    public get obtenerDetalle(): string {
        return this.detalleUsu;
    }

    public set enviarDetalle(detalleP: string) {
        this.detalleUsu = detalleP;
    }

    public get obtenerOption(): string {
        return this.optionUsu;
    }

    public set enviarOption(optionP: string) {
        this.optionUsu = optionP;
    }

    public get obtenerValor(): number {
        return this.valorUsu;
    }

    public set enviarValor(valorP: number) {
        this.valorUsu = valorP;
    }

    //Métodos Set y Get de los valores
    public get obtenerValorIngreso(): number[] {
        return this.valorIngresoUsu;
    }

    public set enviarValorIngreso(valorIngresoUsuP: number) {
        this.valorIngresoUsu.push(valorIngresoUsuP);
    }
    
    public get obtenerValorGasto(): number[] {
        return this.valorGastoUsu;
    }

    public set enviarValorGasto(valorGastoUsuP: number) {
        this.valorGastoUsu.push(valorGastoUsuP);
    }

    //Método que almacena los datos en LocalStorage
    public guardarDatos(): void {
        //Guardando datos en localStorage
        let datosUsu: string[] | any = [];//Se declara el arreglo datosUsu

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
        let datosRecibidos = new RecibirDatos();

        //Enviando los datos del LocalStorage a la tabla
        datosRecibidos.mostrarDatosUsu(this.traerDatos());

        //Enviando los arreglos de ingresos y gastos
        datosRecibidos.arrayIngresos(this.obtenerValorIngreso);
        datosRecibidos.arrayGastos(this.obtenerValorGasto);

    }

    //Método que trae los datos del LocalStorage
    public traerDatos(): string[] {
        
        let datosUsuLocalStorage: string[] = [];//Creando el array para separar los datos del LocalStorage

        let envioDatosUsu: string[] = [];//Creando el array que almacenará los datos del LocalStorage

        //Recorriendo el LocalStorage
        for (let i: number = 0; i < localStorage.length; i++) {

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
    public convirtiendoTipoDatoValor(positionUnoP: string, positionDosP: number): void {

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

}