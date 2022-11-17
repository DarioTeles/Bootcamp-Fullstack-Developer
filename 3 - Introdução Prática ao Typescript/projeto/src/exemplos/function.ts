//Função de exemplo de retorno

function somarValores(numero1: number, numero2: number): number{
    return numero1 + numero2;
}

console.log(somarValores(1,2));


//Função de exemplo de retorno void
function printaValores(texto: string):void{
    console.log(texto);
}

printaValores("Olá, Mundo");

//Função de exemplo de retorno callback
function somarValoresETratar(numero1: number, numero2: number, callback: (numero: number) => number): number{
    let resultado =  numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number){
    return numero * numero;
}

function dividirPorEleMesmo(numero: number){
    return numero / numero;
}

console.log(somarValoresETratar(1,2, aoQuadrado));
console.log(somarValoresETratar(1,2, dividirPorEleMesmo));