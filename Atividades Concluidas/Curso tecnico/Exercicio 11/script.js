document.getElementById('triangle-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (side1 <= 0 || side2 <= 0 || side3 <= 0 || (side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
        document.getElementById('result').innerText = 'Não é um triângulo válido';
        document.getElementById('triangle-image-img').src = '';
        return;
    }

    let triangleType = '';
    let imageUrl = '';
    if (side1 === side2 && side2 === side3) {
        triangleType = 'Equilátero';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zlnGW9lg3S_6MTE1PJDhhKIke958ebFWyQ&s';
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        triangleType = 'Isósceles';
        imageUrl = 'https://s5.static.brasilescola.uol.com.br/be/2021/12/triangulo-isosceles.jpg';
    } else {
        triangleType = 'Escaleno';
        imageUrl = 'https://static.todamateria.com.br/upload/tr/ia/trianguloescaleno.jpg';
    }

    document.getElementById('result').innerText = `Triângulo ${triangleType}`;
    document.getElementById('triangle-image-img').src = imageUrl;
});



 // a+b>c
// a+c>b
// b+c>a
// Tem que respeitar esses critérios acima 