/* Faça um programa para calcular o valor de uma viagem
Você terá 3 variáveis, sendo elas:
1 - Preço do combustível;
2 - Gasto médio por km;
3 - Distância em Km;
*/ 

var precoCombustivel = 4.72 
var gastoMedio = 10
var distanciaKm = 274.6

var resultado = (distanciaKm / gastoMedio) * precoCombustivel
console.log(`Você gastará nesta viagem de ${distanciaKm} kilômentros o equivalente a R$${resultado.toFixed(2)} reais.`)
