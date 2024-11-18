/*Crie uma função que receba uma string como parâmetro e retorne o número de vogais (a, e, i, o, u) presentes na string, independentemente de serem maiúsculas ou minúsculas.*/

const prompt = require('prompt-sync')();

function vogais(letters) {
    let counting = 0;

    for (let i = 0; i < letters.length; i++) {
        
        if ("aeiouAEIOU".includes(letters[i])) {
            counting += 1;
        }
    }
    
    return counting;
}

const letters = prompt(`Digite suas letras para saber quantas vogais têm: `);

console.log(vogais(letters));
