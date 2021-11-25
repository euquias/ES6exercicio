const tecnologias = new Map()
tecnologias.set('react', { frameork: true })
tecnologias.set('angula', { frameork: false })
tecnologias.set('vue', { frameork: true })

console.log(tecnologias.get('react'))
console.log(tecnologias.get('angula'))
console.log(tecnologias.get('vue'))

const chavesVAriadas = new Map([
    [function () {}, 'função'],
    [{}, 'objeto'],
    [123, 'numeros']
])

chavesVAriadas.forEach((vl, ch) => {
    console.log(vl, ch)
});

console.log(chavesVAriadas.delete(123)) //deletar variavel
console.log(chavesVAriadas.has(123)) //saber si a variavel existe
console.log(chavesVAriadas.set(2021))
console.log(chavesVAriadas.size) ///conta quantos elementos tem dentro da variavel