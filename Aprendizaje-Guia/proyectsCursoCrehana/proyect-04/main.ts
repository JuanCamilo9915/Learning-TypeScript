class Producto {

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

let bolso = new Producto(24.99);
console.log(`Antes del cambio: ${typeof bolso.precioP}`);//Se comprueba el tipo de dato de la variable
let precioCadena = String (bolso.precioP);
console.log(`Después del cambio: ${typeof precioCadena}`);//Se comprueba el tipo de dato de la variable

console.log(bolso.precioP);

document.write(`Precio Anterior: ${precioCadena}`);

bolso.precioP = 50;

console.log('Despues de actualzar el precio ' + bolso.precioP);

document.write('<br><br>Nuevo precio: ' + String (bolso.precioP));
