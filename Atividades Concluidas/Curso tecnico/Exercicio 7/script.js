// A (>=9), B (>=7 e <9), C (>=5 e <7), D (>=3 e <5) e E (<3)


function VerificaAprovacao(params) {
    const nota = document.getElementById('nota').value

    let resultado
    if (nota >= 9) {
        resultado = 'A';
    } else if (nota >= 7 ) {
        resultado = 'B';
    } else if (nota >= 5 ) {
        resultado = 'C';
    } else if(nota >= 3 ) {
        resultado = 'D';
    }else if(nota < 3) {
        resultado = 'E'
    }
    document.getElementById('resultado').value = resultado
}

document.getElementById('button').addEventListener('click', VerificaAprovacao)


