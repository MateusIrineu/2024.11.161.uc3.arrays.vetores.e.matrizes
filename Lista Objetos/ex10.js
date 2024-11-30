/*Crie um objeto chamado agenda que armazena informações 
sobre uma pessoa: nome, telefone e email. 
Crie uma função fora do objeto que receba este objeto 
como parâmetro e exiba uma mensagem formatada 
com todas as informações da pessoa.*/

const agenda = {
    nome: "Irineu",
    telefone: 123456789,
    email: "irineu.irineu@irineu.com.br"
}

const informacoes = function(agenda) {
    return agenda
}

console.log(informacoes(agenda))