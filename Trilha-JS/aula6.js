const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)
notas.push(8)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const notaFinal = notas[i]
    soma += notaFinal
} 

var media = soma / notas.length
console.log(`A média é ${media.toFixed(1)}`)

 