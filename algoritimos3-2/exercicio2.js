var prompt = require('prompt-sync')();

const a = Number(prompt("Digite a medida de um lado:"))
const b = Number(prompt("Digite a medida de um lado:"))
const c = Number(prompt("Digite a medida de um lado:"))
const d = Number(prompt("Digite a medida de um lado:"))

const diag1 = Number(prompt("Digite a medida da diagonal 1:"));
const diag2 = Number(prompt("Digite a medida da diagonal 2:"));


if (a === b && b === c && c === d) {
    
    if (Math.pow(diag1, 2) + Math.pow(diag2, 2) === 2 * Math.pow(a, 2)) {
      
        if (diag1 === diag2) {
            console.log("É um quadrado.");
        } else {
            console.log("É um losango.");
        }
    } else {
        console.log("É um losango (mas as diagonais não se cruzam em ângulos retos).");
    }
} else if ((a === c && b === d) || (a === b && c === d) || (a === d && b === c)) {
    
    console.log("É um retângulo.");
} else {
   
    console.log("É outro tipo de quadrilátero.");
}
