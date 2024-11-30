const pessoa = {
    nome: "João Silva",
    idade: 28,
    sexo: "Masculino",
    endereco: {
        logradouro: "Rua das Flores",
        numero: 123,
        bairro: "Jardim Primavera",
        cidade: "São Paulo"
    }
}

envelhecer : () => pessoa.idade++, // se comporta como uma função
envelhecer2() { // é uma função
    pessoa.idade++
}

console.log(pessoa.endereco.logradouro);

pessoa.cpf = "123.456.789-10";

console.log(pessoa);

delete pessoa.cpf;

console.log(pessoa);