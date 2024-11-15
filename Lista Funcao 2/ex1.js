/* Crie uma função que receba dois números como parâmetros e retorne true se o
primeiro número for divisível pelo segundo, e false caso contrário. A função deve
usar o operador de módulo (%). */
const prompt = require('prompt-sync')()

function divisel(a, b) {
    if (a % b === 0) {
        return "true"
    } return "false"
}

const a = parseInt(prompt(`Digite o primeiro número: `))
const b = parseInt(prompt(`Digite o segundo número: `))

console.log(divisel(a, b))
