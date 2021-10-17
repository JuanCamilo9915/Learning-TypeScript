abstract class Producto {

    constructor(private precio: number){

    }

    //Métodos Get y Set
    get precioP(): number{
        return this.precio;
    }

    set precioP(newPrecio: number){
        this.precio = newPrecio;
    }

}

class Carros extends Producto{

    marca: String;
    modelo: number;

    constructor(precio: number, marcaP: String, modeloP: number){
        super(precio);
        this.marca = marcaP;
        this.modelo = modeloP;
    }

}