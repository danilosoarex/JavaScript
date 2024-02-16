const nomes =['Danilo', 'Messi', 'Ronaldo', 'Ronaldo', 'Danilo', 'Danilo', 'Bruno Fernandes']

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];
//const nomesAtualizados = [...new Set(nomes)];

console.log(meuSet);
console.log(nomesAtualizados);