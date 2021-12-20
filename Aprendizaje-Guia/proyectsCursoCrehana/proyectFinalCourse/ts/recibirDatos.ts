/*Seleccionan los campos de texto.
/*Declarando y definiendo las siguientes variables.*/
const detalle = document.getElementById('uno') as HTMLInputElement;//Utilizando Aserción de tipo
const option = document.getElementById('dos') as HTMLSelectElement;
const valor = document.getElementById('tres') as HTMLInputElement;

//Btn
const btn = document.getElementById('btn-submit') as HTMLButtonElement;

//Alias de Tipos para el Constructor de la Clase RecibirDatos
type DatosGastos = {
    detalleUsuA: String;
    optionUsuA: string;
    valorUsuA: number;
    totalSumaAcumuladoUsuA: number;
};

//Clase recibirDatos
class RecibirDatos {
    //Atributos
    private detalleUsu: String | any;
    private optionUsu: string | any;
    private valorUsu: number | any;
    private totalSumaAcomulado: number | any;

    //Constructor
    //Forma # 1
    /*constructor(detalleP?: string, optionP?: string, valorP?: number) {
        this.detalleUsu = detalleP;
        this.optionUsu = optionP;
        this.valorUsu = valorP;
    }*/

    //Forma # 2
    constructor(gastosPersonalesP?: DatosGastos) {
        this.detalleUsu = gastosPersonalesP?.detalleUsuA;
        this.optionUsu = gastosPersonalesP?.optionUsuA;
        this.valorUsu = gastosPersonalesP?.valorUsuA;
        this.totalSumaAcomulado = gastosPersonalesP?.totalSumaAcumuladoUsuA;
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

    //Método que recibe los datos ingresados por el usuario
    public recibiendoDatos(): void | any {
        //Utilizando los métodos set y get de los atributos de está clase
        this.enviarDetalle = detalle.value;
        this.enviarOption = option.value;
        this.enviarValor = Number(valor.value);

        console.log(`Detalle: ${this.obtenerDetalle}, Opcción: ${this.obtenerOption}, valor: ${this.obtenerValor}`);

    }

}

//Escuchando el evento click del btn
btn.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();

    //Instanciando el obj de la clase
    const objRecibirDatos = new RecibirDatos();

    objRecibirDatos.recibiendoDatos();
});