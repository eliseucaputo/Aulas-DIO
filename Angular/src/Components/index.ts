/**
 * variaveis
 */

//tipos primitivos: boolean, number, string
let ligado:boolean = false
let nome:string = 'Eliseu'
let idade:number = 27
let altura:number = 1.67

//tipos especiais null, undefined
let nulo: null = null
let indefinido: undefined = undefined

//tipos abrangentes any, void
let retorno:void
let retornoView: any = 'Eliseu'

//objeto - sem previsibilidade
let produto: object = {
name: 'Eliseu',
cidade: 'Uberlândia',
Idade: 27, 
}

type ProdutoLoja = {
nome: string
preco:number
unidades:number
}

//objeto tipado com previsibilidade
let meuProduto: ProdutoLoja = {
nome: "Tênis",
preco: 89.99,
unidades: 5,
}


/**  
* Arrays
*/

let dados: string[] = ['Eliseu', 'Ana', 'Tamires']
let dados2: Array<string> = ['Eliseu', 'Ana', 'Tamires']

let infos: (string | number)[] = ['Eliseu', 27]

/**
* Tuplas
*/
let boleto:[string, number, number] = ["agua conta", 199.90, 323472342]

/**
* Arrays métodos
*/


/**
* Datas
*/
let aniversario:Date = new Date('2022-12-01 02:00')
console.log(aniversario.toString())

//function 
function addNumber(x:number, y:number) {
return x + y
}
let soma:number = addNumber(4, 7)
console.log(soma)
