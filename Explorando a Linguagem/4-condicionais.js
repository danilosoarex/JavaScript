console.log(`Trabalhando com Condicionais`);

const listaDestinos = new Array(
    `Fortaleza` , 
    `São Paulo`, 
    `Rio de Janeiro`
);

const nota = 8;

if (nota > 8) {
    console.log('Sua nota foi excelente!')
}
else if (nota >= 6 && nota <= 8) {
    console.log('Você passou!')
}
else if (nota >= 4 && nota <= 5){
    console.log("Você está de recuperação!")
}
else {
    console.log("Você foi reprovado!")
}
