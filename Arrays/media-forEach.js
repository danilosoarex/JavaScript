const notas = [10, 7.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota, indice){
    somaDasNotas += nota;
    console.log(indice);
});
const media = somaDasNotas / notas.length
console.log(`A média de notas é ${media}`)