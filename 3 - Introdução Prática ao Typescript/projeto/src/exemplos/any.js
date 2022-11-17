"use strict";
function concatenar(string1, string2) {
    console.log(string1 + string2);
}
let valorString1 = "Olá";
let valorString2 = "Mundo";
concatenar(valorString1, valorString2);
let valorAny;
valorAny = 1;
valorAny = "A";
valorAny = true;
valorString1 = valorAny;
valorString2 = valorAny;
concatenar(valorString1, valorString2); //soma de boolean
