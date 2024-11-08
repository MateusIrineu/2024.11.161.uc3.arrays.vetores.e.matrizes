/* Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.*/

const prompt = require('prompt-sync')();

/*function soma(numeros) {
    let adicao = 0
    for (let i = 0; i <= numeros; i++){
        adicao += i
    }
    return adicao
}

const numeros = parseInt(prompt(`Digite os números: `))

console.log(soma(numeros)) */

function soma(numero1, numero2, numero3) {
    const adicao = numero1 + numero2 + numero3;
    return adicao
}

const numero1 = parseInt(prompt(`Digite o primeiro numero: `))
const numero2 = parseInt(prompt(`Digite o segundo numero: `))
const numero3 = parseInt(prompt(`Digite o terceiro numero: `))

console.log(soma(numero1, numero2, numero3))