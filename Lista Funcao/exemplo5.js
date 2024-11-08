/*Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, 
que é o custo de um item antes do imposto. 
A função “altera” o valor de custo para incluir o imposto sobre vendas.*/



function somaImposto (taxaImposto, custo) {
    const taxacao = taxaImposto / 100;
    const precoFinal = custo + (taxacao * custo); 
    return precoFinal
}
const prompt = require('prompt-sync')()
const taxaImposto = parseFloat(prompt(`Digite a taxa: `));
const custo = parseFloat(prompt(`Digite o custo: `));

console.log(`o preço novo com base nos impostos de ${taxaImposto} %,`,`e no valor de ${custo} reais, será de: ${somaImposto(taxaImposto,custo)} reais.`);
