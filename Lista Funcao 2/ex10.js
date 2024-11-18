/*Crie uma função que receba uma string e um caractere como parâmetros e retorne o número de vezes que o caractere aparece na string. 
Por exemplo, contarOcorrencias("javascript", "a") deve retornar 2.*/

const prompt = require('prompt-sync')();

function contarOcorrencias(string, caracter) {
    let counting = 0;

    for (let i = 0; i < string.length; i++) {
        if (caracter.includes(string[i])) {
            counting += 1;
        }
    }

    return counting;
}

const string = prompt(`Insira a palavra que você deseja: `);
const caracter = prompt(`Insira a letra que você deseja ver quantas vezes foi repetida: `);

console.log(contarOcorrencias(string, caracter));
