const readlineSync = require("readline-sync");

var pet = {};

pet.nome = readlineSync.question("Qual o nome do pet?");
pet.idade = readlineSync.questionInt("Qual a idade do pet?");
pet.peso = readlineSync.questionFloat("Qual o peso do pet?");
pet.cor_pelagem = readlineSync.question("Qual a cor da pelagem?");

var referencia_peso = readlineSync.questionFloat(
	"Qual é o valor de referencia?"
);

var limite_peso = (referencia_peso * 20) / 100;
console.log(limite_peso);

if (pet.peso > referencia_peso + limite_peso) {
	pet.obesidade = true;
} else {
	pet.obesidade = false;
}

console.log(pet);
