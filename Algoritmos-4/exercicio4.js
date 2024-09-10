//F(n + 2) = F(n + 1) + F(n) , com n ≥ 1 e F(1) = F(2) = 1 .

let a = 1, b = 1, c;
let n = 10; 

for (let i = 0; i < n; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}
