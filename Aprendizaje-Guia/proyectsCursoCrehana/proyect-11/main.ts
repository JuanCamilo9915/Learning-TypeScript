//Decorador
/*@primerDecorador
function operarFuncion(){
    console.log('message');
}*/

function encenderAuto(constructor: Function){
    constructor();
}

@encenderAuto//Llamada al decorador encenderAuto
class Auto{//Este es un error por defecto al utilizar decoradores en typescript
    constructor(){
        console.log('Motor Arrancado');
    }
}

/*******************************************************************************************************************/
//Decoradores de Propiedad
function editable(esEditable: boolean){
    return function(objetivo: any, nombrePropiedad: String): any{
        
        let descriptor: PropertyDescriptor = {
            writable: esEditable
        };
        return descriptor;

    }
}

class vehiculo{

    @editable(true)
    placa = 123;

    constructor(){

    }
}

let motoNueva = new vehiculo();

/*******************************************************************************************************************/
//Decoradores de Métodos
function editable2(esEditable: boolean){
    return function(objetivo: any, nombrePropiedad: String, descriptor: PropertyDescriptor): any{
        
        descriptor.writable = esEditable;

    }
}

class Animales{

    tipoAnimal: String = 'Águila';

    @editable2(true)
    decirAguila(){
        console.log(`es un ${this.tipoAnimal}`);
    }

    constructor(){

    }

}

let animal = new Animales();

animal.decirAguila = function(){
    console.log('Halcón');
}

/*******************************************************************************************************************/
//Decoradores con argumentos
function ejecutarConstructor(constructor: Function){
    constructor();
    console.log(constructor);
}

@seDebeEjecutarConstructor(true)
class Universidades{
    constructor(){
        console.log('Hola');
    }
}

function seDebeEjecutarConstructor(respuesta: boolean): any{
    if(respuesta){
        return ejecutarConstructor;
    } else {
        return null;
    }
}