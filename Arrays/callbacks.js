const nomes = ['Danilo', 'Castro', 'Soares'];

console.log("= = = = = Método 1 = = = = = ")
nomes.forEach(function(nome){
    console.log(nome);
})

console.log("= = = = = Método 2 = = = = = ")    
nomes.forEach((nome) => {
    console.log(nome);
})

console.log("= = = = = Método 3 = = = = = ")
function imprimeNome(nome){

    console.log(nome);
}
nomes.forEach(imprimeNome);