/*Crie uma função que receba um array de números e retorne um objeto contendo o
valor mínimo e o valor máximo do array. Exemplo: encontrarMinMax([3, 7, 1, 9, 4])
deve retornar { min: 1, max: 9 }.*/

const prompt = require('prompt-sync')();

function minMax(...numbers) {
    let max = numbers[0]; // Inicializa o maior número com o primeiro valor
    let min = numbers[0]; // Inicializa o menor número com o primeiro valor

    for (let i = 1; i < numbers.length; i++) { // Começa do índice 1, pois o índice 0 já foi inicializado
        if (numbers[i] > max) {
            max = numbers[i]; // Atualiza o maior número
        } else if (numbers[i] < min) {
            min = numbers[i]; // Atualiza o menor número
        }
    }

    return {min, max}; // Retorna um objeto com o menor e o maior número
}

// Leitura dos números, separando por espaço e convertendo para array de números
const input = prompt('Digite os números para saber o menor e o maior, separados por espaço: ');
const numbers = input.split(' ').map(num => parseInt(num));

console.log(minMax(...numbers));
