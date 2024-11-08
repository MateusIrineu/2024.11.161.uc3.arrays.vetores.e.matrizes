// função para imprimir texto
/*function olaMundo() {
    console.log(`Olá Mundo!`);
} */


// funçãp para imprimir texto: "Olá, mundo!" e "Bem vindo, Irineu"
/*function imprimirNome() {
    olaMundo();
    console.log(`Bem vindo, Irineu`)
} */

/*function calcularMedia() {
    const prompt = require('prompt-sync')()
    const numero1 = parseFloat(prompt(`Digite o número 1: `));
    const numero2 = parseFloat(prompt(`Digite o número 2: `));
    const media = (numero1 + numero2) / 2;
    console.log(`A média de ${numero1} e ${numero2} é: ${media.toFixed(2)}.`)
}

for (let i = 0; i < 5; i++) {
    calcularMedia();
} */



/*function media(a, b) {
    return somar(a, b) / 2;
} */


// a quantidade de números que quiser
/* function somar(...valores) {
    let resultado = 0;
    for (let i = 0; i < valores.length; i++) {
        resultado += valores [i]
    }
    return resultado;
}

let teste = somar(1, 2, 3, 4, 5, 20);

console.log(`Resultado: ${teste}`); */


/*let n1 = parseInt(prompt(`Número: `))
let b2 = parseInt(prompt(`Número: `))

let teste = somar(n1, b2);
console.log(`Resultado: ${teste)}`); */


// função de fatorial

function fatorial(valores) {
    let resultado = 1;
    for (let i = valores; i > 0; i--) {
        resultado = resultado * i
    }
    return resultado;
}

console.log(fatorial(4));


function fat(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * fat(numero - 1);
}

console.log(fat(5));