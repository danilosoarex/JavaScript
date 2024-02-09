console.log(`Trabalhando com Listas`);

// const fortaleza = `Fortaleza`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(
    `Fortaleza` , 
    `São Paulo`, 
    `Rio de Janeiro`
);

console.log("Destinos possíveis: ");
console.log(listaDestinos);

listaDestinos.push(`Salvador`);
console.log("Adicionando um item na lista");
console.log(listaDestinos);

listaDestinos.splice(2,1)
console.log(listaDestinos);
console.log(listaDestinos[0]);
