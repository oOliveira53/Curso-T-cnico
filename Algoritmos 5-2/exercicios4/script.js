const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const pares = numeros.filter(num => num % 2 === 0);
const impares = numeros.filter(num => num % 2 !==0 )

console.log("Vetor completo", numeros);
console.log("Números pares:", pares);
console.log("Números impares:", impares);
