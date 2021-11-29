"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Se configura este proyecto con lite-serve: https://github.com/johnpapa/lite-server
previamente a este paso, se inicializa el proyecto como servidor con el sigte comando: npm init
*/
var ClaseAuto = __importStar(require("./includes/clases"));
//import {Automovil, encenderAuto as encender} from './includes/clases';
var clases_1 = __importDefault(require("./includes/clases"));
//let miAuto = new Automovil('Camioneta SUV'); --> Cuando se importa individualmente
var miAuto = new ClaseAuto.Automovil('Camioneta SUV'); // Cuando se importa de forma general
console.log(miAuto);
ClaseAuto.encenderAuto(); // --> Sin el alias
//encender();//Con el alias
//Código exportado por defecto, si no se especifica lo que se va a llamar
(0, clases_1.default)();
