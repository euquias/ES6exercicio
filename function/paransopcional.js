function area(largura, altura){
    const area = largura * altura
    if ( area > 20){
        console.log(`valor acima nao permitido: ${area}.n2`)
    }else{
        return area
    }
}

console.log(area(2, 50))