/*Crie um objeto chamado config com as propriedades tema e 
idioma. 
Use o método Object.freeze() para impedir alterações no objeto e,
 em seguida, tente modificar o valor da propriedade tema. 
 Exiba o objeto no console para verificar se a alteração 
 foi aplicada.*/

 const config = {
    tema: "dark",
    idioma: "PT"
 }

 Object.freeze(config);

 config.tema = "white";

 console.log(config)