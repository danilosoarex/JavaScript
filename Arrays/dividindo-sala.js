const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivan",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Danilo",
];

const sala1 = alunos.slice(0,10);
const sala2 = alunos.slice(10)
console.log(sala1);
console.log(sala2);

const animais = [1,2,3,4];
console.log(animais);
animais.splice(1,0,5)
console.log(animais);
animais.splice(3,2,6)
console.log(animais);