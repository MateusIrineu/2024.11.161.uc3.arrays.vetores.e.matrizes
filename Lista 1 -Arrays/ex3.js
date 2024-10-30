/* Crie um array valores com os números [2, 4, 6, 8, 10]. Multiplique cada elemento por 2 e exiba o novo array no console.  */

const numeros = [2, 4, 6, 8, 10];


for (let i = 0; i < numeros.length; i++) {
    let vezes = numeros[i] * 2
    console.log(`${numeros[i]} X 2 = ${vezes}`)
}