//Clases en TypeScript
class Carro{
    /*public marca: String;
    private modelo: number;
    protected enciende: boolean;*/
    static dimRin: number = 13 ;

    //Método Constructor
    /*constructor(marcaV: String, modeloV: number, enciendeV: boolean){
        console.log(`Hellow soy el constructor`);
        this.marca = marcaV;
        this.modelo = modeloV;
        this.enciende = enciendeV;
    }*/
    constructor(public marcaV: String, private modeloV: number, protected enciendeV: boolean){
        console.log(`Hellow soy el constructor`);
    }

    static infoCar(){
        console.log('Hola, soy un método estatico, ' + Carro.dimRin);
    }

    public mostrarMarca(){
        console.log(`${this.mensaje()} ${this.marcaV}`);
    }

    private mensaje(){
        return 'La marca es: ';
    }

}

let myCar = new Carro('BMW',2022,true);
/*console.log(`my car: ${myCar.marca}, ${myCar.modelo}, ${myCar.enciende}`);

let myCar2 = new Carro('Audi',2000,false);
console.log(myCar2);*/

Carro.infoCar();
myCar.mostrarMarca();