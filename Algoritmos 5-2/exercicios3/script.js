const numeros = [10, 5, 23, 8, 15, 42, 7];

let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(`O maior número presente no vetor é: ${maiorNumero}`);