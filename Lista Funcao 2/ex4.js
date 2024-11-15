/* Crie uma função que receba uma string como parâmetro e retorne a string invertida.
Por exemplo, ao passar "casa", a função deve retornar "asac". */

const prompt = require('prompt-sync')();

function inverter(...letras) {
    let palavra = [...letras];

    for (let i = palavra.lenght; i > 0; i--) {
        palavra.push(i)
    } 

    let palavraInvertida = palavra.reverse().join('');

    return palavraInvertida;
}

const letras = prompt(`Digite a palavra a ser invertida: `);

console.log(inverter(...letras));