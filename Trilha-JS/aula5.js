
class Pessoa {
    nome
    idade
    anoDeNascimento

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2022 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome} `)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome} `)
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`)
    } 
    
}

const eliseu = new Pessoa('Eliseu', 27)
const tamires = new Pessoa('Tamires', 21)

compararPessoas(eliseu, tamires)

