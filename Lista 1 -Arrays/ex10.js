/*  Crie um array temperaturas com os valores [23, 19, 25, 21, 20, 18, 22]. Faça um algoritmo que encontre e exiba o menor valor do array. */

const temperaturas = [23, 19, 25, 21, 20, 18, 22];

let menorTemperatura = 0

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i + 1] < temperaturas[i]) {
        menorTemperatura = temperaturas[i + 1]
    }
} 

console.log(`A menor temperatura é ${menorTemperatura}`)