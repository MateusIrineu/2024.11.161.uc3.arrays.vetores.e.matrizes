/* Crie um objeto chamado jogador com as propriedades nome e pontuacao. 
Adicione um método chamado adicionarPontos que aumenta a pontuação do jogador em um valor especificado como parâmetro. 
Teste o método e exiba o resultado no console.*/

const jogador = {
    nome: "Irineu",
    pontuacao: 6
}

const adicionarPontos = function(pontuacao, x) {
    pontuacaoTotal = (jogador.pontuacao + x);
    return pontuacaoTotal;
}

console.log(adicionarPontos(jogador.pontuacao, 3));
