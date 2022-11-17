"use strict";
//Explicação do tipo unknown
let valorAny1;
valorAny1 = 1;
valorAny1 = "A";
valorAny1 = true;
let valorUnknown1;
valorUnknown1 = 1;
valorUnknown1 = "A";
let valorString = "Teste";
//valorString = valorUnknow1; ERRO
if (typeof valorUnknown1 === "string") {
    valorString = valorUnknown1;
}
//Explicação do retorno never
function lancaErro(mensagem, codigo) {
    throw { mensagem, codigo };
}
lancaErro("Deu erro", 500);
