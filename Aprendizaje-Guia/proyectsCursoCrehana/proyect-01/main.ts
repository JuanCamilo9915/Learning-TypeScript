let saludo: String = 'Hellow World';//Cadena
let dia: number = 23;//Numero
let tienePasaporte: boolean = false;//Boolean

let personas: String[] = ["Fabian", "Carlos", "Juan"];

personas.push('55');//Agrega un dato al arreglo personas

let arregloMultiple: [number, String, boolean] = [75,"Pedro",true];

enum Roles {Admin,Usuario,Invitado};
enum Roles2 {AdminP = 1,UsuarioP,InvitadoP};
enum Roles3 {AdminPN = 3,UsuarioPN,InvitadoPN};

let usuario: Roles = Roles.Admin;
let visitante: Roles = Roles.Invitado;
let usuIdentificado: String = Roles[3];//No esta definido porque el arreglo conta de los elemetos del 0 al 2
let usuAsig: String = Roles[2];

let usuarioP: Roles2 = Roles2.InvitadoP;
let visitanteP: String = Roles2[3];

let usuarioPN: Roles3 = Roles3.InvitadoPN;
let visitantePN: String = Roles3[3];

let pruebaVariable:any = 'Hellow World';
(<String>pruebaVariable).toLocaleLowerCase;//Aquí se estaaplicando el casting

let personasObj = {
    nombre: 'Juan',
    edad: 22
}

personasObj = {
    nombre: 'Paola',
    edad: 27
}

let personasObj2: {nit: number, nomMarca: String,mostrarFundador: () => String, mostrarNit: () => number} = {
    nit: 1125698966,
    nomMarca: 'Mazda',
    mostrarFundador(){
        return 'Kojito Ojiro';
    },
    mostrarNit(){
        return this.nit
    }
}

type Persona = {//Obj Personalizado
    nombre: String;
    edad: number;
    estatura?: number;
    mostrarInfoPersona: () => String;
}

let nuevaPersona: Persona = {
    nombre: 'Pepito Perez',
    edad: 33,
    //estatura: 1.78, --> Quedo como opcional
    mostrarInfoPersona(){
        return `Hola ${this.nombre}`
    }
}

//Unión de Tipos de Datos
let pagosNomina: String | number | null | undefined = 3654;

console.log(saludo);
console.log('Prueba');
console.log(usuario);
console.log(visitante);
console.log(usuIdentificado);
console.log(usuAsig);

console.log(`\n ${usuarioP}`);
console.log(visitanteP);

console.log(`\n ${usuarioPN}`);
console.log(visitantePN);

console.log(`Unión de Tipos de Datos: ${typeof pagosNomina}`);

/********************************************************************************************************************/
function saludar():void{
    alert('Hellow People');
}

function cicloInfinito():never{
    let sum = 55-6;
    throw new Error('Hay un error');/*cuado una función es de tipo never, es obligatorio colocar esta linea de código
    adicional a eso, esta sería la última liena de código, despues de ella, no se reconoce mas código,*/
    let suma = 3 + 7;
}

function cicloInfinito2():never{
    while(true){
        console.log('Bucle Infinito');
    }
}

function saludarPersona(nombre:String){
    //console.log(nombre);
    return `Hola ${nombre}`;
}

saludarPersona('Juan');

function avisoUrgente(){
    alert('Aviso Urgente');
}

function avisoUrgente2(param:number){
    alert('Aviso Urgente');
}

function nameFuncion(paramsObligatorio:number, paramsOpcional?:number, paramsObligatorio2:number = 0) {
    return {
        paramsObligatorio,
        paramsOpcional,//este parametro al indicarle el simbolo de ?, inmediatamente pasa a ser opcional
        paramsObligatorio2/*Este parametro es obligatorio, pero si no se le pasa un valor, por defecto
        mostrará el valor de CredentialsContainer(0)*/
    }
}

nameFuncion(15);

let funcion1: () => void;
let funcion2: (parametro:number) => void;

funcion1 = avisoUrgente;//de está forma el nommbre ede la función asignada no lleva los (), como avisoUrgente
funcion2= avisoUrgente2;

//Nota Importante:
/*
Para que el arci¿hivo de typeScript se complile automaticamente se debe colocar el siguiente código en la terminal:
                                    tsc -w nomArchivo.ts

colocar el siguiente comando para crear el archivo tsconfig.json, el cual reposa toda la configuración de typeScript
                                    tsc --init

Colocar el sigiente comando para que compile todo los archivos e typeScript:
                                    tsc

Colocar el siguiente comando para observar todos los archivos de typeScript
                                    tsc -w
*/