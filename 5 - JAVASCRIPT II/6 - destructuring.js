const pessoa = {
    nome: 'Matheus',
    idade: 19,
    moraEm: 'Pinhais'
}

// Notação ponto para acessar atributos do objeto pessoa
console.log(pessoa.nome);

// List
console.log(pessoa['idade']);

// Destructuring in Objects
const { nome, idade, moraEm } = pessoa
console.log(nome, idade, moraEm);
