"use strict";
const pessoa1 = {
    nome: "Joao",
    idade: 25,
    profissao: "desenvolvedor"
};
pessoa1.idade = 27;
const pessoa2 = {
    nome: "Maria",
    idade: 22,
    profissao: "pintor"
};
const pessoa3 = {
    nome: "Carlos",
    idade: 22,
    profissao: "Desenvolvedor"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const pessoa4 = {
    nome: "Julia",
    idade: 45,
    profissao: Profissao.Ator
};
const pessoa5 = {
    nome: "Felipe",
    idade: 34,
    materias: ['Matematica Discreta', 'Programacao', 'Logica']
};
function listar(lista) {
    for (const item of lista) {
        console.log(" - " + item);
    }
}
listar(pessoa5.materias);
