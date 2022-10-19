
function aplicarDesconto(preco, desconto) {
    return preco - (preco * (desconto / 100)) //Esta linha representa o valor final da peça de roupa
}

function aplicarJuros(preco, juros) {
    return preco + (preco * (juros / 100))
}

var precoNormalProduto = 100

var descontoaVistaDebito = precoNormalProduto * 0.1
var aVistaDinheiroPix = precoNormalProduto * 0.15
var duasVezes = 0
var duasOuMais = precoNormalProduto * 0.1

var formaPagamento = 4

var precoFinal = ''

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoNormalProduto, 10))
} else if (formaPagamento === 2) {
    precoFinal = precoNormalProduto - aVistaDinheiroPix
    console.log(aplicarDesconto(precoNormalProduto, 15))
} else if (formaPagamento === 3) {
    console.log(aplicarDesconto(precoNormalProduto, 0))
} else {
    precoFinal = precoNormalProduto + duasOuMais
    console.log(aplicarJuros(precoNormalProduto, 10))
}


