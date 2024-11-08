/* Faça um programa para imprimir:
    1
    1   2
    1   2   3
    .....
    1   2   3   ...  n
para um n informado pelo usuário. Use uma função que receba um valor n inteiro imprima até a n-ésima linha.*/

const prompt = require('prompt-sync')();

function questao02(numero) {
    let resultado = '';
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += `${j} `;
        }
        resultado += `\n`
    }
    return resultado;
}

const numero = parseInt(prompt(`Insira o número de vezes que será repetido: `));

console.log(questao02(numero));