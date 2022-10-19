/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura *altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça a ela para dizer o valor do seu IMC.
*/

 class Pessoa {
    nome 
    peso  
    altura  

    constructor (nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc() {
        return this.peso / (Math.pow(this.altura, 2))
    } 

    classificarImc() {
        var imc = this.calcularImc()
        if(imc < 18.5) {
            return 'ABAIXO DO PESO'
        } else if (imc < 25) {
            return 'PESO NORMAL'
        } else if (imc < 30) {
            return 'SOBREPESO'
        } else if (imc < 40) {
            return 'OBESO'
        } else {
            return 'OBESIDADE GRAVE'
        }
    }

}


var jose = new Pessoa('José', 70, 1.75)
console.log(`O IMC de ${jose.nome} é ${jose.calcularImc()} sua classificação é ${jose.classificarImc()}`)

var eliseu = new Pessoa('Eliseu', 62, 1.65)
console.log(`O IMC de ${eliseu.nome} é ${eliseu.calcularImc()} sua classificação é ${eliseu.classificarImc()}`)

