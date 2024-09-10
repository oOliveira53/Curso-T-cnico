const prompt = require("prompt-sync")();

const vei = Number(prompt("Digite o numero 1 ou 2:"));

switch(vei) {
  case 1:
    console.log("Nome: Camaro, peso: 1.7 toneladas, tanque: 72 litros, valor: R$495.800");
    break;
  case 2:
    console.log("Nome: Sandero, peso: 1.5 toneladas, tanque: 50 litros, valor: R$60.000");
    break;
  default:
    console.log("Veículo indisponível");
}


//Feito no terminal do Linux
