const pessoa1 = {
    nome: "Joao",
    idade: 25,
    profissao: "desenvolvedor"
}

pessoa1.idade = 27;

const pessoa2: {nome: string, idade: number, profissao: string} = {
    nome: "Maria",
    idade: 22,
    profissao: "pintor"
}

const pessoa3: {nome: string, idade: number, profissao: string} = {
    nome: "Carlos",
    idade: 22,
    profissao: "Desenvolvedor"
}

enum Profissao {
    Professor,
    Ator,
    Desenvolvedor,
    JogadorDeFutebol
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const pessoa4: Pessoa =  {
    nome: "Julia",
    idade: 45,
    profissao: Profissao.Ator
}

const pessoa5: Estudante = {
    nome: "Felipe",
    idade: 34,
    materias: ['Matematica Discreta', 'Programacao', 'Logica']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log(" - " + item);
    }
}

listar(pessoa5.materias);



