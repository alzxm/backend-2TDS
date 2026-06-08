const animal = {
    nome: "Luciano",
    especie: "gato",
    idade: 1,
    tutor: false,
    vacinado: true
};

//console.log(animal);
console.log(animal.nome);
console.log(animal.tutor);

animal.idade = 1;
//console.log(animal);

console.log(`${animal.nome} é um ${animal.especie} com ${animal.idade} de idade e possui sua vacina em dia ${animal.vacinado}`)