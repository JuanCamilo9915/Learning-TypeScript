"use strict";
var saludo = 'Hellow World'; //Cadena
var dia = 23; //Numero
var tienePasaporte = false; //Boolean
var personas = ["Fabian", "Carlos", "Juan"];
personas.push('55'); //Agrega un dato al arreglo personas
var arregloMultiple = [75, "Pedro", true];
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["Usuario"] = 1] = "Usuario";
    Roles[Roles["Invitado"] = 2] = "Invitado";
})(Roles || (Roles = {}));
;
var Roles2;
(function (Roles2) {
    Roles2[Roles2["AdminP"] = 1] = "AdminP";
    Roles2[Roles2["UsuarioP"] = 2] = "UsuarioP";
    Roles2[Roles2["InvitadoP"] = 3] = "InvitadoP";
})(Roles2 || (Roles2 = {}));
;
var Roles3;
(function (Roles3) {
    Roles3[Roles3["AdminPN"] = 3] = "AdminPN";
    Roles3[Roles3["UsuarioPN"] = 4] = "UsuarioPN";
    Roles3[Roles3["InvitadoPN"] = 5] = "InvitadoPN";
})(Roles3 || (Roles3 = {}));
;
var usuario = Roles.Admin;
var visitante = Roles.Invitado;
var usuIdentificado = Roles[3]; //No esta definido porque el arreglo conta de los elemetos del 0 al 2
var usuAsig = Roles[2];
var usuarioP = Roles2.InvitadoP;
var visitanteP = Roles2[3];
var usuarioPN = Roles3.InvitadoPN;
var visitantePN = Roles3[3];
var pruebaVariable = 'Hellow World';
pruebaVariable.toLocaleLowerCase; //Aquí se estaaplicando el casting
console.log(saludo);
console.log('Prueba');
console.log(usuario);
console.log(visitante);
console.log(usuIdentificado);
console.log(usuAsig);
console.log("\n " + usuarioP);
console.log(visitanteP);
console.log("\n " + usuarioPN);
console.log(visitantePN);
/********************************************************************************************************************/
function saludar() {
    alert('Hellow People');
}
function cicloInfinito() {
    var sum = 55 - 6;
    throw new Error('Hay un error'); /*cuado una función es de tipo never, es obligatorio colocar esta linea de código
    adicional a eso, esta sería la última liena de código, despues de ella, no se reconoce mas código,*/
    var suma = 3 + 7;
}
function cicloInfinito2() {
    while (true) {
        console.log('Bucle Infinito');
    }
}
function saludarPersona(nombre) {
    //console.log(nombre);
    return "Hola " + nombre;
}
saludarPersona('Juan');
function avisoUrgente() {
    alert('Aviso Urgente');
}
function avisoUrgente2(param) {
    alert('Aviso Urgente');
}
function nameFuncion(paramsObligatorio, paramsOpcional, paramsObligatorio2) {
    if (paramsObligatorio2 === void 0) { paramsObligatorio2 = 0; }
    return {
        paramsObligatorio: paramsObligatorio,
        paramsOpcional: paramsOpcional,
        paramsObligatorio2: paramsObligatorio2 /*Este parametro es obligatorio, pero si no se le pasa un valor, por defecto
        mostrará el valor de CredentialsContainer(0)*/
    };
}
nameFuncion(15);
var funcion1;
var funcion2;
funcion1 = avisoUrgente; //de está forma el nommbre ede la función asignada no lleva los (), como avisoUrgente
funcion2 = avisoUrgente2;
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
