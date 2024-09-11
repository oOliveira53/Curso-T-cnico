function fatorial(n) {
    if (n < 0) return "Incalculavel";
    
    let respostas = 1;
    let i = n;

    while (i > 1) {
        respostas *= i;
        i--;
    }

    return respostas;
}

console.log(fatorial(10)); 
console.log(fatorial(5)); 
console.log(fatorial(1)); 
