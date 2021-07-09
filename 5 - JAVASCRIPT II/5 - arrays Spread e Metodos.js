const alunos = ['Paulo', 'Paula', 'Mario', 'Maria']

console.log(alunos[2]);;  // Acessar item com notação ponto

// Spread Operator || Operador spread
const listaAlunos = [...alunos, 'Matheus']
console.log(listaAlunos);

for (let i = 0; i < listaAlunos.length; i++) {
    const element = listaAlunos[i];
    console.log(element);
}

// Map() - Usado quando precisamos de um retorno sem alterar o array original
listaAlunos.map(aluno => console.log(`Usando o map: ${aluno}`))

// Filter () - Usamos para filtrar dados de um array sem alterar o original
const numeros = [34, 43, 55, 66, 77, 88];
const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares);

// Sort() - 'Sorte' e altera o array original
const numerosOrdenadosCrescentes = numeros.sort()
console.log(numerosOrdenadosCrescentes);

const numerosOrdenadosDescrescente = numeros.sort((a, b) => b - a)
console.log(numerosOrdenadosDescrescente);

// reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [3, 15, 45]
numbers.reduce((oldValue, newValue) => {
    return oldValue + newValue
})