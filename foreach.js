/* exemplo 1 */
const aprovado = [
    'agata', 'aldo', 'daniel', 'euquias'
]
aprovado.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})
aprovado.forEach(nome => console.log(nome))


