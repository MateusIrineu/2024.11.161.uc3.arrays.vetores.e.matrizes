/*Crie um objeto chamado calculadora com os métodos 
somar(a, b) e multiplicar(a, b). 
Use esses métodos para somar e multiplicar dois números, 
e exiba os resultados no console.*/

const calculadora = {
    somar(a, b) {
        return a + b
    },
    multiplicar(a, b) {
        return a * b
    }
}

console.log(calculadora.somar(2, 5));
console.log(calculadora.multiplicar(3, 2));
