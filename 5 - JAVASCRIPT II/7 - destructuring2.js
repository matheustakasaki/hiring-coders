const filmes = [
    {
        titulo: 'Dilema das Redes',
        id: 1,
        descricao: 'Documentario sobre Tecnologia',
        duracao: 120
    },
    {
        titulo: 'us',
        id: 2,
        descricao: 'Filme de terror',
        duracao: 120
    },
    {
        titulo: 'Corra',
        id: 3,
        descricao: 'Filme de suspense',
        duracao: 120
    }
]

const [{titulo, id}] = filmes
filmes.map(filme => console.log(filme.descricao))