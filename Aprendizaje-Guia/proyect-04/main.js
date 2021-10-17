"use strict";
var Producto = /** @class */ (function () {
    function Producto(precio) {
        this.precio = precio;
    }
    Object.defineProperty(Producto.prototype, "precioP", {
        //Métodos Get y Set
        get: function () {
            return this.precio;
        },
        set: function (newPrecio) {
            this.precio = newPrecio;
        },
        enumerable: false,
        configurable: true
    });
    return Producto;
}());
var bolso = new Producto(24.99);
console.log("Antes del cambio: " + typeof bolso.precioP); //Se comprueba el tipo de dato de la variable
var precioCadena = String(bolso.precioP);
console.log("Despu\u00E9s del cambio: " + typeof precioCadena); //Se comprueba el tipo de dato de la variable
console.log(bolso.precioP);
document.write("Precio Anterior: " + precioCadena);
bolso.precioP = 50;
console.log('Despues de actualzar el precio ' + bolso.precioP);
document.write('<br><br>Nuevo precio: ' + String(bolso.precioP));
