/*Crie um array nomes com os elementos ["Ana", "Bruno", "Carlos", "Diana"]. Remova o último elemento do array e exiba o resultado no console. */

const prompt = require('prompt-sync')();

const nomes = ["Ana", "Bruno", "Carlos", "Diana"];

 for (let i = 0; i < nomes.length - 1; i++) {
     console.log(nomes[i])
}

/*const ultimo = nomes.length  - 1;


nomes.pop(nomes[ultimo])

console.log(nomes)*/