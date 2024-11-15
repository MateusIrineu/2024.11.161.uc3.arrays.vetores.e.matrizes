/* Crie uma função que receba um número inteiro positivo e retorne o fatorial desse
número. Não utilize recursão, apenas um loop simples (por exemplo, 5! = 5 * 4 * 3
* 2 * 1 = 120). */

const prompt = require('prompt-sync')();

let multi = 1;

function fatorial(numero) {
    for (let i = numero; i > 1; i--) {
        multi = multi * i;
    }
    return multi;
}

const numero = parseInt(prompt(`Digite o número para saber o resultado de seu fatorial: `));

console.log(`O resultado de ${numero}! é: ${fatorial(numero)}`);
