const LinhaTotal = 4;

for (let i = 1; i <= LinhaTotal; i++) {

    let linha = ' '.repeat(LinhaTotal - i);
    
    
    linha += 'A'.repeat(i).trim();
    
   
    console.log(linha);
}
