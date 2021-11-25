const geladeira = new Set()

geladeira.add('carne')
geladeira.add('frutas')
geladeira.add('verdutas')
geladeira.add('bebias')

console.log(geladeira.delete('bebias'))
console.log(geladeira)
console.log(geladeira.add('bebidas'))
console.log(geladeira.size)
console.log(geladeira.has('bebidas'))
