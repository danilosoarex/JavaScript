const notas = [7, 7, 8, 9];

const novaNotas = notas;
novaNotas.push(10);

console.log(novaNotas);
console.log(notas);

notas.push(8);
console.log(novaNotas);
console.log(notas);

const novaNotas2 = [10, ...notas, 10];

console.log(novaNotas2);
console.log(notas);