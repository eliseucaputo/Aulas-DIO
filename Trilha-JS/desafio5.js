/* 
3) Elabore um algorimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
1- A vista débito, recebe 10% de desconto;
2- A vista no dinheiro ou pix, recebe 15% de desconto;
3- Em duas vezes, preço normal, sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais 10% de juros.
*/

var precoNormalProduto = 100

var descontoaVistaDebito = precoNormalProduto * 0.1
var aVistaDinheiroPix = precoNormalProduto * 0.15
var duasVezes = 0
var duasOuMais = precoNormalProduto * 0.1

var formaPagamento = 4

var precoFinal = ''

if (formaPagamento === 1) {
     precoFinal = precoNormalProduto - descontoaVistaDebito
    console.log(`Preço: R$${precoFinal.toFixed(2)}`)
} else if (formaPagamento === 2) {
    precoFinal = precoNormalProduto - aVistaDinheiroPix
    console.log(`Preço: R$${precoFinal.toFixed(2)}`)
} else if (formaPagamento === 3) {
    precoFinal = precoNormalProduto - duasVezes
    console.log(`Preço: R$${precoFinal.toFixed(2)}`)
} else {
    precoFinal = precoNormalProduto + duasOuMais
    console.log(`Preço: R$${precoFinal.toFixed(2)}`)
}


