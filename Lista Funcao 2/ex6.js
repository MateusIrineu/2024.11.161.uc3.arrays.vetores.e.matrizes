/*Crie uma função que receba um número n e retorne a soma de todos os números
de 1 até n. Por exemplo, para n = 5, a função deve retornar 1 + 2 + 3 + 4 + 5 = 15.*/

const prompt = require('prompt-sync')();

function soma(numeros) {

    let somando = 0;

    for (let i = 1; i <= numeros; i++) {
        somando += i;
    }
    return somando
}

const numeros = parseInt(prompt(`Digite o número para obter a soma: `));

console.log(`A soma total é de: ${soma(numeros)}`);
