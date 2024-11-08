/*Faça um programa para imprimir:
    1
    2   2
    3   3   3
    .....
    n   n   n   n   n   n  ... n
para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha.*/

const prompt = require('prompt-sync')();

function repetirNumero(numero) {
    let resultado = '';
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += `${i} `;
        }
        resultado += `\n`
    }
    return resultado;
}

const numero = parseInt(prompt(`Insira o número de vezes que será repetido: `));

console.log(repetirNumero(numero));