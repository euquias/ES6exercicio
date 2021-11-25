/* const numeros = ['5', '10', '50', '4']

let resultado = numeros.map(function(e){
    return e * 3
})
console.log(resultado)

/* retorna um Array apenas com os preços */

/* const carrinho =[
'{"nome":"borracha", "preco":3.15}',
'{"nome":"caneta", "preco":5.00}',
'{"nome":"borracha", "preco":3.15}'
] */

/* const paraObjeto = JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)  */

const cesta = [
    { nome: "computador", "qrt": 2, valor: 200 },
    { nome: "mesa game", "qrt": 15, valor: 300 },
    { nome: "cadeira ", "qrt": 5, valor: 1000 },
    { nome: "lede", "qrt": 1, valor: 50 }
]


const resultado = cesta.map(e => e.qrt * e.valor)
.reduce (function(acc, atual){
    return acc + atual
},0)
console.log(resultado)