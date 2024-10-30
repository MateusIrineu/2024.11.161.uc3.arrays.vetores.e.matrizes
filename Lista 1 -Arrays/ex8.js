/*  Crie um array idades com os valores [15, 20, 18, 22, 25, 20, 18, 22]. Faça um algoritmo que conte quantas vezes o número 18 aparece no array.  */

const valores = [15, 20, 18, 22, 25, 20, 18, 22]

contagem = 0

for (let i = 0; i < valores.length; i++) {
    if (valores[i] === 18) {
        contagem = contagem + 1 //contagem++
    }
} console.log(contagem)