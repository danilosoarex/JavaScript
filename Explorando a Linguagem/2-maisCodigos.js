console.log("= Conversão de Tipos =");

console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));

console.log("2.2"+"7.7")
console.log(parseFloat("2.2") + parseFloat("7.7"));

console.log("10" / "2");
console.log("Danilo" / "2"); //Not a number
console.log("Danilo" * "2"); //Not a number

console.log(6.5);
console.log(6,5);

//
console.log(" ");
console.log("= Atribuição e Imutabilidade =");

const nome = 'Danilo';
const sobrenome = 'Soares';
console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`);

let nome1 = "Danilo"
nome1 = nome1 + sobrenome;
console.log(`Meu nome é ${nome1}`);
const nomeCompleto = nome + sobrenome;
console.log(`Meu nome é ${nomeCompleto}`);

const idade = 27;
let ano;  // atribuindo variável
ano = 2024; // atribuindo valor
console.log(ano - idade);