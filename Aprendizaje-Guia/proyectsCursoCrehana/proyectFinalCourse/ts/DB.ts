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
        let datosUsu: string[] | any = [];//Se declara el arreglo datosUsu

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

        console.log(`key: ${localStorage.getItem(String(localStorage.key(0)))}`);

        //Enviando los datos del LocalStorage a la tabla
        this.traerDatos();

    }

    //Método que trae los datos del LocalStorage
    public traerDatos(): string[][] {
        //Trayendo datos del localStorage
        let strSeparadoLocalStorage: string[] = new Array();//Creando el array para separar los datos del LocalStorage
        //let strSeparadoF: string[][] = new Array();//Creando la matriz que almacenará los datos del LocalStorage
        let strSeparadoF: string[][] = [[]];

        //Recorriendo el LocalStorage
        for (let i: number = 0; i < localStorage.length; i++) {
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



    }

    public traerDatosTest(): string[] {

        let str: string = '';
        let array1: string[] = [];

        let array2: string[] = [];

        for (let i: number = 0; i < localStorage.length; i++) {

            array1 = JSON.stringify(localStorage.getItem(String(localStorage.key(i)))).split(',');

            array2.push(array1[0]);
            array2.push(array1[1]);
            array2.push(array1[2]);

        }

        return array2;

    }


    /*this.enviarDetalle = String(localStorage.getItem('ServiciosPublicos'));
    this.enviarOption = String(localStorage.getItem('ServiciosPublicosGasto'));
    this.enviarDetalle = String(localStorage.key(0));
    this.enviarOption = String(localStorage.key(1));*/

    //Convirtiendo el tipo de dato de valorLocalStorage
    /*this.enviarValor = parseInt(String(localStorage.getItem('ServiciosPublicosValor')), 10);
    this.enviarValor = parseInt(String(localStorage.key(2)));*/

}