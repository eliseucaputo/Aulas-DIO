/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado
*/

var listaPercorre = [12, 11, 2, 5, 678, 15, 46, 77, 708, 92 ]

for(var i = 0; i < listaPercorre.length; i++){
    if(listaPercorre[i] % 2 === 0) {
        console.log(listaPercorre[i])
    }
}

