/* Faça um programa para calcular o valor de uma viagem
Você terá 5 variáveis, sendo elas: 

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em Km da viagem

Imprima no console o valor que será gasto nessa viagem
*/ 

var etanol = 3.85
var gasolina = 4.68
var tipoCombustivel = 'etanol'
var kmPorLitroGasolina = 10
var kmPorLitroEtanol = 7
var distancia = 485
var valorGastoGasolina = (distancia / kmPorLitroGasolina) * gasolina
var valorGastoEtanol = (distancia / kmPorLitroEtanol) * etanol

if (tipoCombustivel === 'gasolina') {
    console.log(`O valor gasto, usando gasolina é R$${valorGastoGasolina.toFixed(2)}`)
} if (tipoCombustivel === 'etanol') {
    console.log(`O valor gasto, usando etanol é R$${valorGastoEtanol.toFixed(2)}`)
}

