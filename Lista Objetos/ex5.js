/*Crie dois objetos chamados usuario1 e usuario2 com as 
propriedades nome e idade. 
Combine os dois objetos em um único objeto chamado usuarios, 
utilizando o spread operator. Exiba o objeto resultante no 
console.*/

const user1 = { nome: "Mateus", idade: 27 };
const user2 = { nome2: "Irineu", idade2: 72 };
const users = { ...user1, ...user2};
console.log(users);
