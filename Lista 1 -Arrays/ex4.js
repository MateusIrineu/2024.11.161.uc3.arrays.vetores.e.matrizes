/* Crie um array cores com 5 elementos: "vermelho", "azul", "verde", "amarelo", "preto". Crie um algoritmo que retorne o índice da cor "verde". */

const prompt = require('prompt-sync')();

const elementos = ["vermelho", "azul", "verde", "amarelo", "preto"]

let cor = false

for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] === "verde") {
        console.log(`O verde está no índice ${i}`)
    } 
} 