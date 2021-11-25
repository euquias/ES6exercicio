/* exemplo 1 */
/* const aprovado = [
    'agata', 'aldo', 'daniel', 'euquias'
]
aprovado.forEach(function (nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})
aprovado.forEach(nome => console.log(nome)) */

const cesta = [
    { nome: "computador", "qrt": 2, valor: 200 },
    { nome: "mesa game", "qrt": 1, valor: 300 },
    { nome: "cadeira ", "qrt": 2, valor: 1000 },
    { nome: "lede", "qrt": 1, valor: 50 }
]

  cesta.forEach(function(nome) {
   return nome
 })

console.log(cesta)