/* Crie um array chamado frutas com 10 elementos: "maçã", "banana", "laranja", "uva", "melancia", "abacaxi", "manga", "morango", "kiwi", "pera". 
Crie um algoritmo que receba uma fruta e informe se ela pertence ao array frutas. */

const prompt = require('prompt-sync')();

let frutas = ["maca", "banana", "laranja", "uva", "melancia", "abacaxi", "manga", "morango", "kiwi", "pera"];

const fruta = prompt(`Escolha uma fruta para saber se ela está na lista: `);

let encontrado = false;

for (let i = 0; i < 10 ; i++) {
    if (fruta === frutas[i]) {
        encontrado = true;
        break
    } 
}

if (encontrado) {
    console.log(`TEM!!!`);
} else {
    console.log(`NÃO TEM!!!`)
}