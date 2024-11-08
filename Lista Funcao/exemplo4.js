/*Faça um programa, com uma função que necessite de um argumento. 
A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.*/

const prompt = require('prompt-sync')();



function numero(valor) {
    if (valor > 0) {
        return 'P'
    }
        return 'N'
}

const valor = parseFloat(prompt(`Digite o número para saber se é positivo ou negativo: `));

console.log(numero(valor))
