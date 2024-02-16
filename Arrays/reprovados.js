const alunos = ['Ronaldo', 'Messi','Rooney','Suarez'];
const medias = [9, 10, 8, 5];

const reprovados = alunos.filter((_, indice)=>{
    return medias[indice] < 7 ; 
});
console.log(reprovados);