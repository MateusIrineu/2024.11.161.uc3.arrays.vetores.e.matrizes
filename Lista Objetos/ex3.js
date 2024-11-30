/*Crie um objeto chamado carro com as propriedades marca, modelo e ano. 
Adicione um método chamado descricao que retorna uma string no formato: 
"Este carro é um [marca] [modelo] do ano [ano]". 
Exiba o resultado do método no console.*/

const carro = {
    marca: "Vouquisvaguem",
    modelo: "Golzim quadrado",
    ano: 1997
}

const descricao = (carro) => console.log(`Este carro é um ${carro.marca} ${carro.modelo} do ano ${carro.ano}`);

console.log(descricao(carro));