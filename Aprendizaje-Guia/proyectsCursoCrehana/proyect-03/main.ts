class Vehiculo{
    private alertarSobreElTipo(){
        alert(this.tipo)
    }

    protected obtenerTipo(){
        return this.tipo;
    }

    constructor(public tipo: String){

    }
}

class Carro extends Vehiculo{

    constructor(tipo: String, public motor: String){
        super(tipo);
        console.log('El tipo es: ' + super.obtenerTipo())
    }    

}

let carro1 = new Carro('sedan','1.4 ltrs');

let tipoCar: String = carro1.tipo;
let motorCar: String = carro1.motor;

console.log(`Carro 1: ${carro1.tipo}`);
console.log(`Carro 1: ${carro1.motor}`);
console.log(`Carro 1: ${carro1}`);

//Se muestra en el navegador
/*document.write(tipoCar.toString());
document.write(motorCar.toString());*/

/*message1 = document.write(tipoCar.toString());
message2 = document.write(motorCar.toString());*/

//Selección de elementos
let conte1, conte2, message1, message2;

conte1 = document.querySelector('.tipo-carro');
conte2 = document.querySelector('.motor-carro');
message1 = document.createElement('b');
message2 = document.createElement('b');

message1.innerText = `Tipo: ${tipoCar}`;
message2.innerText = `Motor: ${motorCar}`;

conte1?.append(message1);
conte2?.append(message2);

//message1?.innerHTML = carro1.tipo; --> lo muestra pero presenta error, debido a que carro1, no es un elemento del DOM