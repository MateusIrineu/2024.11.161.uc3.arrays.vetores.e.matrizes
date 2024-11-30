/*Crie um objeto chamado estoque com produtos como 
propriedades, onde cada propriedade é um nome de produto 
e o valor é a quantidade em estoque. 
Escreva uma função que recebe o nome de um produto 
como parâmetro e verifica se ele está disponível no estoque.*/

const estoque = {
    produto1: {
        nome1: "caixa",
        valor1: 5
    },

    produto2: {
        nome2: "cimento",
        valor2: 10
    }
} 

const disponivel = function(nome1) {
    return estoque.produto1.valor1
}

console.log(disponivel(estoque));
