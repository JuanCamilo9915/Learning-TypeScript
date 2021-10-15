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

    render(){
        const message = document.querySelector('.carro');
    }

}

let carro1 = new Carro('sedan','1.4 ltrs');

console.log(`Carro 1: ${carro1.tipo}`);
console.log(`Carro 1: ${carro1.motor}`);
console.log(`Carro 1: ${carro1}`);