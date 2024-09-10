const prompt = require("prompt-sync")();
const animal = prompt("Digite o nome do animal:").toLowerCase(); 

function animaClass(animal) {
    let categoria;

    switch (true) {
        case ["gato", "cachorro", "leão", "urso", "coelho"].includes(animal):
            categoria = "Mamífero";
            break;
        case ["corvo", "pato", "papagaio", "pomba", "andorinha"].includes(animal):
            categoria = "Ave";
            break;
        case ["crocodilo", "camaleão", "tartaruga", "lagartixa", "jiboia"].includes(animal):
            categoria = "Réptil";
            break;
        case ["truta", "sardinha", "linguado", "carpa", "tilápia"].includes(animal):
            categoria = "Peixe";
            break;
        case ["abelha", "mosquito", "barata", "grilo", "gafanhoto"].includes(animal):
            categoria = "Inseto";
            break;
        default:
            categoria = "Classificação desconhecida";
            break;
    }

    return categoria;
}

const categoria = animaClass(animal);
console.log(`O animal ${animal} é classificado como: ${categoria}`);
