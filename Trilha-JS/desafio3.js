/* 
1) Faça um programa que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado
*/

var nota1 = 7
var nota2 = 4
var nota3 = 7

var media = (nota1 + nota2 + nota3) / 3

console.log(`Média: ${media.toFixed(1)}`)

if (media < 5) {
    console.log('REPROVADO!!')
} else if (media >= 5 && media <= 7) {
    console.log('RECUPERAÇÃO!!')
} else {
    console.log('APROVADO, PARABÉBS!!')
}
