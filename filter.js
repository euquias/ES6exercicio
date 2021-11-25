const cesta = [
    { nome: "computador", "qrt": 2, valor: 200 },
    { nome: "mesa game", "qrt": 15, valor: 300 },
    { nome: "cadeira ", "qrt": 2, valor: 1000 },
    { nome: "lede", "qrt": 1, valor: 50 }
]
/* const caro = cesta.filter(e => {
    return e.valor  >= 500    
})

const barato = cesta.filter(e => {
    return e.valor  <= 500    
})

console.log(caro)
console.log(barato) */

const buscarvalor = cesta.filter(e => {
return e.qrt <= 1  })
console.log(buscarvalor)



