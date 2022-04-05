var idade = 16
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota!')
} else {
    if (idade >= 18 && idade <= 70) {
        console.log('Voto obrigatório!')
    } else {
        console.log('Voto facultativo!')
    }
}