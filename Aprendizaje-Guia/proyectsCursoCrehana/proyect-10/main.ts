function miFavorito<tipoFavorito>(favorito: tipoFavorito) {
    return favorito;
}

let color = miFavorito<String>('Green');
let color2 = miFavorito('White');//de esta forma también funciona
let numero = miFavorito<number>(11);
let afirmacion = miFavorito(true);

console.log(color);
console.log(color2);
console.log(numero);
console.log(afirmacion);

//Arreglos:
let nombres: Array<String> = ['Carolina','Fabían','Juan'];