/*Crie uma função que receba um número inteiro e retorne true se ele for um número
primo e false caso contrário. Lembre-se de que um número primo é divisível apenas
por 1 e por ele mesmo.*/

const prompt = require('prompt-sync')();

function primo (numero) {
    if (numero % 2 !==0 ) {
        return "true"
    }
    return "false"
}

const numero = parseInt(prompt(`Digite o número para saber se ele é primo ou não: `));

console.log(primo(numero));
