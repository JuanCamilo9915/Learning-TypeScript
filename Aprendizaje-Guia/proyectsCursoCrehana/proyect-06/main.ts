class AutomovilUnico{

    static instancia: AutomovilUnico;

    private constructor(public marca: String, public modelo: number){

    }

    static fabricarAutoUnico(marca: String, modelo: number){

        if (!AutomovilUnico.instancia) {
            AutomovilUnico.instancia = new AutomovilUnico(marca, modelo);
        }

        return AutomovilUnico.instancia;

    }

}

let miAutoUnico = AutomovilUnico.fabricarAutoUnico('BMW', 2022);
let otroAutoUnico = AutomovilUnico.fabricarAutoUnico('Audi', 2032);

console.log(miAutoUnico);
console.log(otroAutoUnico);