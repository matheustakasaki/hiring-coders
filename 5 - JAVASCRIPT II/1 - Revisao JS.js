// Pares de 0 a 100 com for
for (let i = 0; i <= 100; i = i + 2) {
    console.log('Usando For: ' + i);
}

var contador = 0
while (contador >= 100) {
    console.log('Usando While:', contador);
    contador = contador + 2
}


const calculaMedia = (nota, nota2, nota3) => {
    let media = parseInt((nota + nota2 + nota3) / 3);

    if (media >= 7) {
        console.log(`Você foi aprovado com media ${media}`);
    }
    if (media >= 5 && media < 7) {
        console.log(`Você ainda pode recuperar sua nota! ${media}`);
    }
    if (media < 5) {
        console.log(`Ainda não chegou lá, campeão :) ${media}`);
    }
}

calculaMedia(5, 6, 2)
