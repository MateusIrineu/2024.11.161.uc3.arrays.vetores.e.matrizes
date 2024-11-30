/* Crie um objeto chamado pedido com as propriedades numeroPedido, cliente e itens (um array de objetos, onde cada objeto representa um item com nome e quantidade). 
Adicione um método chamado resumoPedido que retorna o número do pedido e o nome de todos os itens.*/

const pedido = {
    numeroPedido: 5,
    cliente: "Irineu",
    itens: {
        item1: {
            nome: "maçã",
            quantidade: 4
        }
    },
        item2: {
            nome: "laranja",
            quantidade: 2
    },
        item3: {
            nome: "uva",
            quantidade: 3
        }
}

delete pedido.cliente

const resumoPedido = function(pedido) {
    return pedido;
}

console.log(resumoPedido(pedido));
