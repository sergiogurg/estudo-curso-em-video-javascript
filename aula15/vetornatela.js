vetor = [5, 3, 7, 4, 2, 9]

// Jeito tradicional de loop FOR:
for (pos = 0 ; pos < vetor.length ; pos++) {
    console.log(`a ${pos}ª posição tem o valor ${vetor[pos]}`)
}

// Jeito simplificado de loop FOR para arrays e objetos:
for (let pos in vetor) {
    console.log(`A ${pos}ª posição guarda o valor ${vetor[pos]}`)
}

// Uso da propriedade indexOf()
// OBS.: o 'Of' é com 'O' MAIÚSCULO!
valor = 8
let key = vetor.indexOf(valor)
console.log(`O valor ${valor} está na ${key}ª posição.`)