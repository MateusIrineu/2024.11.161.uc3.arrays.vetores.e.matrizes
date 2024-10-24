/* crie um algoritmo que receba 04 notas e calcule a média e informe se o aluno está APROVADO ou REPROVADO. A média é 7,0. */

const prompt = require('prompt-sync')();

let numeros = new Array(4);
// let numeros = []

let soma = 0;

for (let i = 0; i < 4; i++) {
    let numero = parseInt(prompt('Informe as notas: '));
    numeros[i] = numero;
    // numeros.push(numero)
    soma += numero;
}

const media = soma / numeros.length;

if (media > 7) {
    console.log('APROVADO')
} else {
    console.log('REPROVADO')
}