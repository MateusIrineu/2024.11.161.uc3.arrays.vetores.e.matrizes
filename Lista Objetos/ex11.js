/*Crie um objeto chamado biblioteca que possui uma 
propriedade livros (um array de objetos). 
Cada objeto no array deve representar um livro, 
com as propriedades titulo e autor. 
Adicione um método ao objeto biblioteca 
chamado listarLivros que exibe o título e o autor de cada 
livro.*/

const biblioteca = {
    livros: {
        livro1: {
            titulo: "livro1",
            autor: "fulano1"
                },
        livro2: {
            titulo2: "livro2",
            autor2: "fulano2"
               }
    }
}

const listarLivros = function(biblioteca) {
    return biblioteca
}

console.log(listarLivros(biblioteca));