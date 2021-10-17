interface Automovil{

    dimenciones: String;
    tipoCombustible: String;
    lucesOn(funcionan: boolean): String;

}

/*let auto: Automovil = {

    dimenciones: '4m',
    tipoCombustible: 'Gasolina',
    lucesOn(funcionan: boolean){
        if (funcionan) {
            return 'Luces del carro encendidas';
        } else {
            return 'Las luces del carro estan malas'
        }
    }
    
}*/

class Carro implements Automovil{

    constructor(public dimenciones: String, public tipoCombustible: String){

    }

    //Métodos de la clase Automivil
    lucesOn(){
        return 'Las luces están encendidas'
    }

}

/*Ejercicio # 2*/
interface Correr{

    (cansado: boolean): String;

}

let quieroCorrer: Correr;

quieroCorrer = function () {
    return 'Si quiero correr'   
}