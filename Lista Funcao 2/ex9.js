/*Crie uma função que receba uma base e um expoente e retorne o valor da base elevada ao expoente, sem usar o método Math.pow. Utilize apenas um loop para multiplicações sucessivas*/

const prompt = require('prompt-sync')();

function elevar(base, expoente) {
    let resultado = base ** expoente;

    return resultado;
}

const base = parseInt(prompt(`Insira o valor da base: `));
const expoente = parseInt(prompt(`Insira o valor do expoente: `));

console.log(elevar(base, expoente));
