/*Adicione uma nova propriedade chamada editora ao objeto livro criado na questão anterior. 
Modifique o valor da propriedade titulo e remova a propriedade autor. 
Exiba o objeto atualizado no console.*/

const livro = {
    titulo: "Barba do Rei Careca",
    autor: "Mateus Irineu",
    paginas: 123
}

livro.editora = "Irineu's Library";
livro.titulo = "A volta dos que não foram";
delete livro.autor;

console.log(livro)