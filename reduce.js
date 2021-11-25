const cesta = [
    { nome: "computador", valor: 200 },
    { nome: "mesa game", valor: 300 },
    { nome: "cadeira ", valor: 1000 },
    { nome: "lede", valor: 100 }
]

const resultado = cesta.map(v =>v.valor).reduce(function(acc, atual){
    return acc + atual
})
////////////////////////////////////////////////

const valores = [1, 2, 3, 4 ,5 , 6, 10]

const notas = valores.reduce(function(acc, value){
    return acc + value
})

////////////////


const resultado2 = cesta.map(e => e.valor).reduce(function(acc, atual){
    return acc + atual
},0)

console.log(resultado2) 
///////////////////////////














