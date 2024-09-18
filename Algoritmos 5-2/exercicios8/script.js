var prompt = require("prompt-sync")()

let vetor = [1, 2, 3, 4, 5, 6];
const elemento = Number(prompt("Digite um número: "))

let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === elemento) {
        encontrado = true;
        break;
    }
}

console.log(encontrado);
