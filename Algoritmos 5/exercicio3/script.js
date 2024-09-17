var prompt = require("prompt-sync")()
const cor = ["amarelo", "azul", "branco"]

const corUser= prompt("Digite uma cor: ")

const posicao = cor.indexOf(corUser.toLocaleLowerCase())



if (posicao == -1) {
    console.log("Cor não encontrada, digite outra");
    
}else{
    console.log(posicao);
    
}