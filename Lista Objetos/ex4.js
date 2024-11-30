/*Crie um objeto chamado aluno com as propriedades nome, 
idade e matriculado (com valores booleanos). Use um for...in 
para iterar sobre o objeto e exibir as chaves e os valores no 
console.*/

const aluno = {
    nome: "Irineu",
    idaide: 27,
    matriculado: true
}

for (let cadastro in aluno) {
    console.log(`${cadastro} : ${aluno[cadastro]}`)
}