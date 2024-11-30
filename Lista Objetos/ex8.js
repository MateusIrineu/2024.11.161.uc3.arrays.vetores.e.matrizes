/*Crie um objeto chamado pessoa com as propriedades nome e idade.
Use o método Object.seal() para impedir a adição ou remoção 
de propriedades, mas permita a modificação dos valores 
existentes. Modifique o valor da propriedade nome e tente 
adicionar uma nova propriedade chamada cidade. 
Exiba o objeto no console.*/

const pessoa = {
    nome: "Irineu",
    idade: 27
}

Object.seal(pessoa);

pessoa.nome = "Mateus";

pessoa.cidade = "Natal";

console.log(pessoa)