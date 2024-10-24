/* Crie um algoritmo que receba 10 números do usuário e imprima de trás para frente */

const prompt = require('prompt-sync')();

let numeros = new Array(10);

// recebendo os números
for (let i = 0; i < numeros.length; i++) {
    let numero = parseInt(prompt(`Informe o ${i + 1}º número: `));
    numeros[i] = numero;
} 

console.log(numeros.length)

// imprimindo os elementos de trás para frente
for(let i = numeros.length - 1; i >= 0; i--) {
    console.log(`Número ${i + 1}: ${numeros[i]}`)
}
