function concatenar(string1: string, string2: string){
    console.log(string1 + string2);
}

let valorString1: string = "Olá";
let valorString2: string = "Mundo";

concatenar(valorString1, valorString2);

let valorAny: any;
valorAny = 1;
valorAny = "A";
valorAny = true;

valorString1 = valorAny;
valorString2 = valorAny;

concatenar(valorString1, valorString2); //soma de boolean
