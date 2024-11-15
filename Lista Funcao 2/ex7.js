/*Crie uma função que receba um array de números e retorne um objeto contendo o
valor mínimo e o valor máximo do array. Exemplo: encontrarMinMax([3, 7, 1, 9, 4])
deve retornar { min: 1, max: 9 }.*/

const prompt = require('prompt-sync')();

function minMax(...numbers) {
    let arrayNumbers = [...numbers];
    let newArrayNumbers = arrayNumbers [0];

    for (let i = 0; i < arrayNumbers; i++) {
        arrayNumbers.push(i);
        if (arrayNumbers[i] > newArrayNumbers[0]) {
            newArrayNumbers = arrayNumbers[i];

        } else if (arrayNumbers[i] < newArrayNumbers[0]) {
            newArrayNumbers = arrayNumbers[i];
        }
        return newArrayNumbers;
    }
}

const numbers = parseInt(prompt(`Digite os números para saber o menor e o maior: `));

console.log(minMax(...numbers));
