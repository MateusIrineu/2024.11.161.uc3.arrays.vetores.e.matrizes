/*Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, 
que é o custo de um item antes do imposto. 
A função “altera” o valor de custo para incluir o imposto sobre vendas.*/

function somaImposto (taxacao, custo) {
    const taxacao = taxaImposto / 100;
    const precoFinal = taxacao * custo; 
    return precoFinal
}

const taxaImposto = parseFloat(prompt(`Digite a taxa: `));
const custo = parseFloat(prompt(`Digite o custo: `));

console.log(somaImposto(taxacao, custo));
