//Clase
export class ProcesandoDatosUsu {
    //Atributos
    private detalleUsu: String | any;
    private optionUsu: string | any;
    private valorUsu: number | any;
    //private totalSumaAcomulado: number | any;

    //Constructor
    //Forma # 1
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

    //Método que almacena los datos en LocalStorage
    public guardarDatos(): void {
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

    }

    //Método que trae los datos del LocalStorage
    public traerDatos(): void {
        //Trayendo datos del localStorage
        /*this.enviarDetalle = String(localStorage.getItem('ServiciosPublicos'));
        this.enviarOption = String(localStorage.getItem('ServiciosPublicosGasto'));*/
        this.enviarDetalle = String(localStorage.key(0));
        this.enviarOption = String(localStorage.key(1));

        //Convirtiendo el tipo de dato de valorLocalStorage
        /*this.enviarValor = parseInt(String(localStorage.getItem('ServiciosPublicosValor')), 10);*/
        this.enviarValor = parseInt(String(localStorage.key(2)));

    }

    public keyLocalStorage(): void {
        let datosUsu: string[] | any = [];

        datosUsu.push(this.obtenerDetalle);
        datosUsu.push(this.obtenerOption);
        datosUsu.push(this.obtenerValor);

        localStorage.setItem(`datosUsu${this.obtenerDetalle}`, datosUsu);

        console.log(`key: ${localStorage.getItem(String(localStorage.key(0)))}`);

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

    }

}