//Explicação do tipo unknown

let valorAny1: any;
valorAny1 = 1;
valorAny1 = "A";
valorAny1 = true;

let valorUnknown1: unknown;
valorUnknown1 = 1;
valorUnknown1 = "A";

let valorString: string = "Teste";
//valorString = valorUnknow1; ERRO

if(typeof valorUnknown1 === "string"){
    valorString = valorUnknown1;
}

//Explicação do retorno never

function lancaErro(mensagem: string, codigo: number): never{
    throw {mensagem, codigo};
}

lancaErro("Deu erro", 500);
