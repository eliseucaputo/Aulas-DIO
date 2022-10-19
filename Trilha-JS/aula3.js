/*
function quadrado(valor) {
   return valor * valor
}
console.log(quadrado(10))


function incrementarjuros(preco, juros) {
    var acrescimo = (juros / 100) * preco 
    return preco + acrescimo
}
console.log(incrementarjuros(100, 10))
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if(imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc < 25) {
        return 'Peso normal'
    } else if (imc < 30) {
        return 'Acima do peso'
    } else if(imc < 40) {
        return 'Obesidade'
    } else {
        return 'Obesidade mórbida'
    }
}

(function main() {
    var peso = 67.4
    var altura = 1.95
    
    var imc = calcularImc(peso, altura)
    console.log(`Seu peso é ${peso}kg e sua altura ${altura}m. Seu IMC é ${classificarImc(imc)}.`)
})()
// esse '()' dentro da função é chamado de função imediatamente invocada, utilizada quando queremos invoca-las apenas uma vez dentro do código

