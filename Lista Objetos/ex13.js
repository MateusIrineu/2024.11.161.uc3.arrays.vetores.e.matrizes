/*Crie um objeto chamado filme com as propriedades titulo, 
diretor e ano. 
Adicione uma propriedade chamada atores contendo um array 
com nomes de atores. 
Adicione um método chamado descricaoCompleta que 
retorna uma string descrevendo o filme, incluindo o título, 
diretor, ano e atores.*/

const filme = {
    titulo: "Filme sem nome",
    diretor: "Irineu",
    ano: 1997,
    atores: {
        ator1: "fulano",
        ator2: "cricrano",
        ator3: "semIdea"
    }
}

const descricaoCompleta = function(filme) {
    return filme;
}

console.log(descricaoCompleta(filme));
