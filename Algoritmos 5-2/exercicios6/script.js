let numeros = [3, 5, 1, 8, 2];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log(maior);
