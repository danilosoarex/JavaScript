const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const notas = [10, 6.5 , 8, 7.5];

//const media = (nota1 + nota2 + nota3 + nota4) / 4
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}.`);

notas.push(7, 7); // Adicionando valores no final do Array
const mediaNova = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5]) / notas.length;
console.log(`a nova média é ${mediaNova}.`);

notas.pop(); // Removendo útimo valor
const outraMedia = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;
console.log(`a outra media é ${outraMedia}.`);

// shift() remove o primeiro valor
// unshift() adiciona na primeira posição