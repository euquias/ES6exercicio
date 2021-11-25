for ( let letras of 'ultilizando for of'){ ///percorre as letras
    console.log(letras)
}

const assuntosecma = ['Mep', 'Set', 'Promisse']

for (let i in assuntosecma){
console.log(i)
}
for (let asssuntos of assuntosecma){
    console.log(asssuntos)
}
const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set',{abordado:true}],
    ['Promisse',{abordado:false}]
])
for(let asssuntos of assuntoMap){
    console.log(asssuntos)
}
for (let chave of assuntoMap.keys()){
    console.log(chave)
}
for(let valor of assuntoMap.values()){
    console.log(valor)
}
for(let[ch, vl] of assuntoMap.entries()){
    console.log(ch, vl)
}