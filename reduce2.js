const cesta = [
    { nome: "computador", "qrt": 2, valor: 200 },
    { nome: "mesa game", "qrt": 1, valor: 300 },
    { nome: "cadeira ", "qrt": 2, valor: 1000 },
    { nome: "lede", "qrt": 1, valor: 50 }
]

const resultado = cesta.map((e) => {
   return e.qrt * e.valor})

.reduce(function(acc, atual){
    return acc + atual
},0)

console.log(resultado)



const resultado2 = cesta.filter(e => {
    return e.valor
}); 

console.log(resultado2)