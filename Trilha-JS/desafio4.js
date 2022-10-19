/* 
2) O IMC = Indice de Massa Corporal é um critério da organização Mundia da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:

IMC = peso / (altura * altura)           **altura em metros**

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acotdo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 Obesidade Grave.
*/

var peso = 67.4
var altura = 1.67

var imc = peso / Math.pow(altura, 2)
console.log(`Seu peso é ${peso}kg e sua altura ${altura}m. Seu IMC é ${imc.toFixed(2)}.`)

if(imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc < 25) {
    console.log('Peso normal')
} else if (imc < 30) {
    console.log('Acima do peso')
} else if(imc < 40) {
    console.log('Obesidade')
} else {
    console.log('Obesidade mórbida')
}