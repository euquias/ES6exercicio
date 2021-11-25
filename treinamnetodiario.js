const casas = {casa:'lugar'}
const garagen = {__proto__:casas, carro:'hb20'}
const piscina = {__proto__:garagen, agua:'limpa'}

console.log(piscina.casa)