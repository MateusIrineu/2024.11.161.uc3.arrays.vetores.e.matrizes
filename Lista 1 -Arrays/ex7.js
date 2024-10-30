/* Crie um array dias com os elementos ["segunda", "terça", "quarta", "quinta", "sexta"]. Inverta a ordem do array e exiba o resultado no console. */

const prompt = require('prompt-sync')();

const nomes = ["segunda", "terça", "quarta", "quinta", "sexta"];

for (let i = nomes.lenght; i >= 0; i--) {
    console.log(nomes[i])
}