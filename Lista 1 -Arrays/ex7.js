/* Crie um array dias com os elementos ["segunda", "terça", "quarta", "quinta", "sexta"]. Inverta a ordem do array e exiba o resultado no console. */

/* const prompt = require('prompt-sync')();

const nomes = ["segunda", "terça", "quarta", "quinta", "sexta"];

for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
} */

const dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

const diasInvertidos = new Array(dias.lenght);

for (let i = 0; i < dias.lenght; i++) {
    diasInvertidos[i] = dias[dias.lenght - 1 - i];
}

console.log(diasInvertidos);