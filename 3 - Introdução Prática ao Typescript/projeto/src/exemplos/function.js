"use strict";
//Função de exemplo de retorno
function somarValores(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValores(1, 2));
//Função de exemplo de retorno void
function printaValores(texto) {
    console.log(texto);
}
printaValores("Olá, Mundo");
//Função de exemplo de retorno callback
function somarValoresETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresETratar(1, 2, aoQuadrado));
console.log(somarValoresETratar(1, 2, dividirPorEleMesmo));
