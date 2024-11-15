/*Crie uma função que receba três números como parâmetros e retorne o maior
deles. Não use funções prontas como Math.max, apenas comparações lógicas.*/

const prompt = require('prompt-sync')();

function maior(a, b, c) {
    let valor = [a, b, c];
    let maiorValor = valor[0];

    for (let i = 1; i < valor.length; i++) {
        if (valor[i] > maiorValor) {
            maiorValor = valor[i];
        }
    } 
    return maiorValor;
}

const a = parseInt(prompt(`Digite o primeiro número: `));
const b = parseInt(prompt(`Digite o segundo número: `));
const c = parseInt(prompt(`Digite o terceiro número: `));

console.log(maior(a, b, c));
